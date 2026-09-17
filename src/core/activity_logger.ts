import * as fs from "fs";
import * as path from "path";

// Terminal ANSI Color Codes
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  brightRed: "\x1b[91m",
  green: "\x1b[32m",
  brightGreen: "\x1b[92m",
  yellow: "\x1b[33m",
  brightYellow: "\x1b[93m",
  blue: "\x1b[34m",
  brightBlue: "\x1b[94m",
  magenta: "\x1b[35m",
  brightMagenta: "\x1b[95m",
  cyan: "\x1b[36m",
  brightCyan: "\x1b[96m",
  gray: "\x1b[90m",
  white: "\x1b[37m",
};

export interface CallerInfo {
  ip: string;
  name?: string;
  userAgent?: string;
  clientId?: string;
}

export interface ActivityRecord {
  id: string;
  timestamp: string; // ISO 8601
  date: string; // YYYY-MM-DD
  time: string; // HH:mm:ss
  caller: CallerInfo;
  type: "tool_call" | "rpc_method" | "sse_event" | "system";
  name: string; // e.g. "fwcc_search_docs", "fwcc_get_doc", "initialize"
  argsSummary?: string;
  args?: any;
  durationMs: number;
  success: boolean;
  error?: string;
}

export interface ToolMetric {
  calls: number;
  success: number;
  errors: number;
  totalDurationMs: number;
  avgDurationMs: number;
  minDurationMs: number;
  maxDurationMs: number;
  lastCalledAt: string;
}

export interface CallerMetric {
  calls: number;
  success: number;
  errors: number;
  clientName?: string;
  firstSeenAt: string;
  lastSeenAt: string;
}

export interface DailyStats {
  date: string; // YYYY-MM-DD
  totalRequests: number;
  totalToolCalls: number;
  totalSuccess: number;
  totalErrors: number;
  successRatePercent: number;
  totalDurationMs: number;
  avgDurationMs: number;
  byTool: Record<string, ToolMetric>;
  byCaller: Record<string, CallerMetric>;
  byHour: Record<string, number>;
  recentActivities: ActivityRecord[];
  lastUpdated: string;
}

export interface ActivityLoggerOptions {
  logsDir?: string;
  maxRecentInMemory?: number;
  printConsole?: boolean;
}

export class ActivityLogger {
  private logsDir: string;
  private maxRecentInMemory: number;
  private printConsole: boolean;
  private currentStats: Map<string, DailyStats> = new Map();
  private isWritingStats = false;
  private pendingStatsWrite = false;

  constructor(options: ActivityLoggerOptions = {}) {
    this.logsDir = options.logsDir || path.resolve(process.cwd(), "logs");
    this.maxRecentInMemory = options.maxRecentInMemory || 100;
    this.printConsole = options.printConsole !== false;
    this.ensureDirSync(this.logsDir);
  }

  public getLogsDirectory(): string {
    return this.logsDir;
  }

  private ensureDirSync(dir: string) {
    try {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    } catch (e) {
      // Ignore directory creation error
    }
  }

  private getTodayDateStr(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  private getTimeStr(now: Date = new Date()): string {
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  private summarizeArgs(args: any, maxLength = 120): string {
    if (!args || typeof args !== "object") return "";
    try {
      const keys = Object.keys(args);
      if (keys.length === 0) return "";

      const parts: string[] = [];
      for (const k of keys) {
        const val = args[k];
        if (typeof val === "string") {
          const trimmed = val.replace(/\r?\n/g, " ").trim();
          parts.push(`${k}: "${trimmed.length > 30 ? trimmed.substring(0, 30) + "..." : trimmed}"`);
        } else if (typeof val === "number" || typeof val === "boolean") {
          parts.push(`${k}: ${val}`);
        } else if (Array.isArray(val)) {
          parts.push(`${k}: [${val.length} items]`);
        } else if (val && typeof val === "object") {
          parts.push(`${k}: {..}`);
        }
      }
      const summary = parts.join(", ");
      return summary.length > maxLength ? summary.substring(0, maxLength) + "..." : summary;
    } catch {
      return "";
    }
  }

  /**
   * Log an activity record in real-time, print to console, append to log file, and update daily stats
   */
  public async logActivity(input: {
    caller: CallerInfo;
    type: "tool_call" | "rpc_method" | "sse_event" | "system";
    name: string;
    args?: any;
    durationMs: number;
    success: boolean;
    error?: string;
  }): Promise<ActivityRecord> {
    const now = new Date();
    const dateStr = this.getTodayDateStr();
    const timeStr = this.getTimeStr(now);
    const id = `act_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
    const argsSummary = this.summarizeArgs(input.args);

    const record: ActivityRecord = {
      id,
      timestamp: now.toISOString(),
      date: dateStr,
      time: timeStr,
      caller: {
        ip: input.caller.ip || "127.0.0.1",
        name: input.caller.name || input.caller.clientId || "Anonymous",
        userAgent: input.caller.userAgent || "",
        clientId: input.caller.clientId || "",
      },
      type: input.type,
      name: input.name,
      argsSummary,
      args: input.args,
      durationMs: Math.max(0, Math.round(input.durationMs)),
      success: input.success,
      error: input.error,
    };

    // 1. Console Real-Time Log
    if (this.printConsole) {
      this.printConsoleRecord(record);
    }

    // 2. Append to daily .log file and .jsonl file
    this.appendToFileAsync(dateStr, record);

    // 3. Update in-memory and persisted daily statistics
    this.updateDailyStats(dateStr, record);

    return record;
  }

  private printConsoleRecord(record: ActivityRecord) {
    const timeTag = `${C.gray}[${record.date} ${record.time}]${C.reset}`;
    const callerIdentifier =
      record.caller.name && record.caller.name !== "Anonymous" && record.caller.name !== record.caller.ip
        ? `${record.caller.ip} (${record.caller.name})`
        : record.caller.ip;
    const callerTag = `${C.brightBlue}[USER/IP: ${callerIdentifier}]${C.reset}`;

    let typeTag = `${C.cyan}[${record.type.toUpperCase()}]${C.reset}`;
    if (record.type === "tool_call") {
      typeTag = `${C.brightYellow}[TOOL: ${record.name}]${C.reset}`;
    } else if (record.type === "rpc_method") {
      typeTag = `${C.magenta}[RPC: ${record.name}]${C.reset}`;
    } else if (record.type === "sse_event") {
      typeTag = `${C.brightCyan}[SSE: ${record.name}]${C.reset}`;
    }

    const statusTag = record.success
      ? `${C.brightGreen}✓ SUCCESS${C.reset}`
      : `${C.brightRed}✗ FAILED${C.reset}`;

    const durationTag = `${C.dim}(${record.durationMs}ms)${C.reset}`;

    let details = "";
    if (record.argsSummary) {
      details += ` ${C.gray}params: { ${record.argsSummary} }${C.reset}`;
    }
    if (!record.success && record.error) {
      const errSnippet = record.error.replace(/\r?\n/g, " ").trim();
      details += ` ${C.brightRed}| Error: ${errSnippet.length > 120 ? errSnippet.substring(0, 120) + "..." : errSnippet}${C.reset}`;
    }

    console.log(`${timeTag} ${callerTag} ${typeTag} => ${statusTag} ${durationTag}${details}`);
  }

  private appendToFileAsync(dateStr: string, record: ActivityRecord) {
    try {
      this.ensureDirSync(this.logsDir);

      // Plain text readable log line
      const callerIdentifier = record.caller.name ? `${record.caller.ip} (${record.caller.name})` : record.caller.ip;
      const statusStr = record.success ? "SUCCESS" : `FAILED: ${record.error || "Unknown Error"}`;
      const argsStr = record.argsSummary ? ` | args: { ${record.argsSummary} }` : "";
      const logLine = `[${record.date} ${record.time}] [Caller: ${callerIdentifier}] [${record.type.toUpperCase()}] ${record.name} => ${statusStr} (${record.durationMs}ms)${argsStr}\n`;

      const logFilePath = path.join(this.logsDir, `activity_${dateStr}.log`);
      fs.appendFile(logFilePath, logLine, "utf8", () => {});

      // JSONL Record
      const jsonlFilePath = path.join(this.logsDir, `records_${dateStr}.jsonl`);
      fs.appendFile(jsonlFilePath, JSON.stringify(record) + "\n", "utf8", () => {});
    } catch (e) {
      // Fallback
    }
  }

  private getOrCreateDailyStats(dateStr: string): DailyStats {
    let stats = this.currentStats.get(dateStr);
    if (stats) return stats;

    const statsFilePath = path.join(this.logsDir, `stats_${dateStr}.json`);
    if (fs.existsSync(statsFilePath)) {
      try {
        const content = fs.readFileSync(statsFilePath, "utf8");
        stats = JSON.parse(content) as DailyStats;
        this.currentStats.set(dateStr, stats);
        return stats;
      } catch (e) {
        // Fallback create new
      }
    }

    stats = {
      date: dateStr,
      totalRequests: 0,
      totalToolCalls: 0,
      totalSuccess: 0,
      totalErrors: 0,
      successRatePercent: 100,
      totalDurationMs: 0,
      avgDurationMs: 0,
      byTool: {},
      byCaller: {},
      byHour: {},
      recentActivities: [],
      lastUpdated: new Date().toISOString(),
    };
    this.currentStats.set(dateStr, stats);
    return stats;
  }

  private updateDailyStats(dateStr: string, record: ActivityRecord) {
    const stats = this.getOrCreateDailyStats(dateStr);

    stats.totalRequests++;
    if (record.type === "tool_call") {
      stats.totalToolCalls++;
    }

    if (record.success) {
      stats.totalSuccess++;
    } else {
      stats.totalErrors++;
    }

    stats.successRatePercent =
      stats.totalRequests > 0
        ? Math.round((stats.totalSuccess / stats.totalRequests) * 1000) / 10
        : 100;

    stats.totalDurationMs += record.durationMs;
    stats.avgDurationMs = Math.round((stats.totalDurationMs / stats.totalRequests) * 10) / 10;

    // Tool breakdown
    if (record.type === "tool_call") {
      const toolKey = record.name;
      if (!stats.byTool[toolKey]) {
        stats.byTool[toolKey] = {
          calls: 0,
          success: 0,
          errors: 0,
          totalDurationMs: 0,
          avgDurationMs: 0,
          minDurationMs: record.durationMs,
          maxDurationMs: record.durationMs,
          lastCalledAt: record.timestamp,
        };
      }
      const tMetric = stats.byTool[toolKey];
      tMetric.calls++;
      if (record.success) tMetric.success++;
      else tMetric.errors++;
      tMetric.totalDurationMs += record.durationMs;
      tMetric.avgDurationMs = Math.round((tMetric.totalDurationMs / tMetric.calls) * 10) / 10;
      tMetric.minDurationMs = Math.min(tMetric.minDurationMs, record.durationMs);
      tMetric.maxDurationMs = Math.max(tMetric.maxDurationMs, record.durationMs);
      tMetric.lastCalledAt = record.timestamp;
    }

    // Caller breakdown
    const callerKey = record.caller.ip || "127.0.0.1";
    if (!stats.byCaller[callerKey]) {
      stats.byCaller[callerKey] = {
        calls: 0,
        success: 0,
        errors: 0,
        clientName: record.caller.name || callerKey,
        firstSeenAt: record.timestamp,
        lastSeenAt: record.timestamp,
      };
    }
    const cMetric = stats.byCaller[callerKey];
    cMetric.calls++;
    if (record.caller.name && record.caller.name !== "Anonymous") {
      cMetric.clientName = record.caller.name;
    }
    if (record.success) cMetric.success++;
    else cMetric.errors++;
    cMetric.lastSeenAt = record.timestamp;

    // Hourly distribution
    const hourKey = record.time.substring(0, 2);
    stats.byHour[hourKey] = (stats.byHour[hourKey] || 0) + 1;

    // Recent in-memory activities buffer
    stats.recentActivities.unshift(record);
    if (stats.recentActivities.length > this.maxRecentInMemory) {
      stats.recentActivities.pop();
    }

    stats.lastUpdated = new Date().toISOString();

    // Persist daily stats to JSON file
    this.scheduleSaveStats(dateStr, stats);
  }

  private scheduleSaveStats(dateStr: string, stats: DailyStats) {
    if (this.isWritingStats) {
      this.pendingStatsWrite = true;
      return;
    }

    this.isWritingStats = true;
    const statsFilePath = path.join(this.logsDir, `stats_${dateStr}.json`);

    fs.writeFile(statsFilePath, JSON.stringify(stats, null, 2), "utf8", () => {
      this.isWritingStats = false;
      if (this.pendingStatsWrite) {
        this.pendingStatsWrite = false;
        this.scheduleSaveStats(dateStr, this.getOrCreateDailyStats(dateStr));
      }
    });
  }

  /**
   * Query daily stats for a specific date (defaults to today)
   */
  public getDailyStats(dateStr?: string): DailyStats {
    const targetDate = dateStr || this.getTodayDateStr();
    return this.getOrCreateDailyStats(targetDate);
  }

  /**
   * List available date strings that have log files
   */
  public getAvailableLogDates(): string[] {
    try {
      this.ensureDirSync(this.logsDir);
      const files = fs.readdirSync(this.logsDir);
      const dates = new Set<string>();
      for (const f of files) {
        const match = f.match(/(?:activity|stats|records)_(\d{4}-\d{2}-\d{2})\.(?:log|json|jsonl)/);
        if (match && match[1]) {
          dates.add(match[1]);
        }
      }
      return Array.from(dates).sort().reverse();
    } catch {
      return [this.getTodayDateStr()];
    }
  }

  /**
   * Read recent readable log lines from the daily activity log
   */
  public getDailyLogs(dateStr?: string, limit = 50): string[] {
    const targetDate = dateStr || this.getTodayDateStr();
    const logFilePath = path.join(this.logsDir, `activity_${targetDate}.log`);
    try {
      if (!fs.existsSync(logFilePath)) return [];
      const content = fs.readFileSync(logFilePath, "utf8");
      const lines = content.split("\n").filter((l) => l.trim().length > 0);
      return lines.slice(-limit);
    } catch {
      return [];
    }
  }

  /**
   * Generate a formatted text summary for dashboard or MCP report
   */
  public formatSummaryText(dateStr?: string): string {
    const stats = this.getDailyStats(dateStr);
    const date = stats.date;

    const lines: string[] = [
      `==================================================================`,
      `  📊 FWCC KNOWLEDGE SERVER DAILY ACTIVITY REPORT [${date}]`,
      `==================================================================`,
      `• Total Requests : ${stats.totalRequests}`,
      `• Total Tool Calls: ${stats.totalToolCalls}`,
      `• Success Rate    : ${stats.successRatePercent}% (${stats.totalSuccess} OK / ${stats.totalErrors} Errors)`,
      `• Avg Duration    : ${stats.avgDurationMs}ms`,
      `• Last Updated    : ${stats.lastUpdated}`,
      `------------------------------------------------------------------`,
      `👥 USERS / CALLERS BREAKDOWN:`,
    ];

    const callers = Object.entries(stats.byCaller);
    if (callers.length === 0) {
      lines.push(`  (No callers recorded yet)`);
    } else {
      for (const [ip, metric] of callers) {
        lines.push(
          `  - IP: ${ip.padEnd(16)} | User/Client: ${(metric.clientName || ip).padEnd(14)} | Calls: ${String(metric.calls).padStart(4)} | OK: ${metric.success} | Err: ${metric.errors}`
        );
      }
    }

    lines.push(`------------------------------------------------------------------`);
    lines.push(`🛠️  TOP TOOLS USAGE BREAKDOWN:`);

    const tools = Object.entries(stats.byTool).sort((a, b) => b[1].calls - a[1].calls);
    if (tools.length === 0) {
      lines.push(`  (No tool calls recorded yet)`);
    } else {
      for (const [name, metric] of tools) {
        lines.push(
          `  - ${name.padEnd(26)} : ${String(metric.calls).padStart(4)} calls (OK: ${metric.success}, Err: ${metric.errors}, avg: ${metric.avgDurationMs}ms)`
        );
      }
    }

    lines.push(`------------------------------------------------------------------`);
    lines.push(`🕒 HOURLY DISTRIBUTION:`);
    const hours = Object.entries(stats.byHour).sort((a, b) => a[0].localeCompare(b[0]));
    if (hours.length === 0) {
      lines.push(`  (No hourly data yet)`);
    } else {
      const hourStr = hours.map(([h, c]) => `${h}:00 (${c})`).join(", ");
      lines.push(`  ${hourStr}`);
    }
    lines.push(`==================================================================`);

    return lines.join("\n");
  }
}
