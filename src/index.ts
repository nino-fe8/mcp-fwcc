import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import express from "express";
import cors from "cors";
import { CONFIG } from "./config/constants.js";
import { globalToolRegistry } from "./core/tool_registry.js";
import { DocsSearchEngine } from "./engines/docs_search_engine.js";
import { GraphEngine } from "./engines/graph_engine.js";
import { ActivityLogger, CallerInfo } from "./core/activity_logger.js";
import { initAllTools } from "./tools/index.js";

// ANSI Color Helpers
const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  red: "\x1b[31m",
  brightRed: "\x1b[91m",
  cyan: "\x1b[36m",
  brightCyan: "\x1b[96m",
  green: "\x1b[32m",
  brightGreen: "\x1b[92m",
  yellow: "\x1b[33m",
  brightYellow: "\x1b[93m",
  blue: "\x1b[34m",
  gray: "\x1b[90m",
  white: "\x1b[37m",
};

function printBanner() {
  console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}|   ______ _    _  _____ _____     _   _  ______ _____ _____       |${C.reset}`);
  console.log(`${C.brightCyan}|   |  ___| |  | |/  __ \\  __ \\   | | / / |  _  \\  _  /  ___|      |${C.reset}`);
  console.log(`${C.brightCyan}|   | |_  | |  | || /  \\/ /  \\/   | |/ /  | | | | | | \\ \`--.       |${C.reset}`);
  console.log(`${C.brightCyan}|   |  _| | |/\\| || |   | |       |    \\  | | | | | | |\`--. \\      |${C.reset}`);
  console.log(`${C.brightCyan}|   | |   \\  /\\  /| \\__/\\ \\__/\\   | |\\  \\ | |/ /\\ \\_/ /\\__/ /      |${C.reset}`);
  console.log(`${C.brightCyan}|   \\_|    \\/  \\/  \\____/\\____/   \\_| \\_/ |___/  \\___/\\____/       |${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}|             Cocos Common Slot Framework Knowledge Hub            |${C.reset}`);
  console.log(`${C.brightCyan}|                                                                  |${C.reset}`);
  console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
  console.log("");
}

// Print Initial Banner
printBanner();

console.log(`${C.green}[INFO]${C.reset} Initializing FWCC Slot Framework Knowledge Engine...`);

// Step 0: Initialize Activity Logger
const activityLogger = new ActivityLogger();

// Step 1: Initialize Docs Search Engine
console.log(`${C.yellow}[1/3]${C.reset} Indexing markdown documentation chunks...`);
const docsEngine = new DocsSearchEngine(CONFIG.DOCS_DIR);
docsEngine.init();
const topicsCount = docsEngine.listTopics().length;
console.log(`      ${C.gray}-> Indexed topics and chunk vectors (${topicsCount} topics ready)${C.reset}`);

// Step 2: Initialize Conceptual Graph Engine
console.log(`${C.yellow}[2/3]${C.reset} Building conceptual relationship graph & backlinks...`);
const graphEngine = new GraphEngine();
graphEngine.init();
console.log(`      ${C.gray}-> Graph initialized with bi-directional relations${C.reset}`);

// Step 3: Register MCP Tools (including Stats & Activity Logging tools)
console.log(`${C.yellow}[3/3]${C.reset} Registering MCP Tool definitions...`);
initAllTools(globalToolRegistry, { docsEngine, graphEngine, activityLogger });
const totalTools = globalToolRegistry.getAllTools().length;
console.log(`      ${C.gray}-> ${totalTools} tools registered to global registry${C.reset}\n`);

function extractCallerInfo(req: express.Request): CallerInfo {
  const rawIp =
    ((req.headers["x-forwarded-for"] as string)?.split(",")[0]?.trim() ||
      req.socket.remoteAddress ||
      req.ip ||
      "127.0.0.1") as string;
  const ip = rawIp.replace(/^::ffff:/, "");

  const customUser = (req.headers["x-caller-name"] ||
    req.headers["x-user"] ||
    req.headers["x-client-id"] ||
    req.headers["x-mcp-client-name"]) as string | undefined;

  const userAgent = (req.headers["user-agent"] as string) || "";

  let name = customUser;
  if (!name) {
    if (userAgent.includes("antigravity")) {
      name = "Antigravity";
    } else if (userAgent.includes("Claude") || userAgent.includes("claude-code")) {
      name = "Claude";
    } else if (userAgent.includes("Cursor")) {
      name = "Cursor";
    } else if (userAgent.includes("axios") || userAgent.includes("node-fetch")) {
      name = "NodeClient";
    } else if (ip === "127.0.0.1" || ip === "::1" || ip === "localhost") {
      name = "LocalUser";
    } else {
      name = ip;
    }
  }

  return {
    ip,
    name,
    userAgent,
    clientId: (req.headers["x-client-id"] as string) || undefined,
  };
}

function createServerInstance(caller?: CallerInfo) {
  const server = new Server(
    {
      name: CONFIG.SERVER_NAME,
      version: CONFIG.SERVER_VERSION,
    },
    {
      capabilities: {
        tools: {},
      },
    }
  );

  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: globalToolRegistry.getMCPToolList(),
    };
  });

  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    const startTime = Date.now();
    const activeCaller = caller || { ip: "127.0.0.1", name: "MCP-Client" };

    try {
      const result = await globalToolRegistry.executeTool(name, args);
      const durationMs = Date.now() - startTime;
      const isError = (result as any)?.isError === true;

      activityLogger.logActivity({
        caller: activeCaller,
        type: "tool_call",
        name,
        args,
        durationMs,
        success: !isError,
        error: isError ? JSON.stringify((result as any)?.content || result) : undefined,
      });

      return result;
    } catch (err: any) {
      const durationMs = Date.now() - startTime;
      activityLogger.logActivity({
        caller: activeCaller,
        type: "tool_call",
        name,
        args,
        durationMs,
        success: false,
        error: err?.message || String(err),
      });
      throw err;
    }
  });

  return server;
}

async function bootstrap() {
  const isStdio = process.argv.includes("--stdio");

  if (isStdio) {
    const server = createServerInstance({ ip: "stdio", name: "StdioClient" });
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error(`[${CONFIG.SERVER_NAME}] Running over Stdio Transport.`);
  } else {
    const app = express();
    app.use(cors());
    app.use(express.json({ limit: "50mb" }));

    const transports = new Map<string, SSEServerTransport>();

    // SSE endpoint
    app.get("/sse", async (req, res) => {
      const caller = extractCallerInfo(req);
      console.log(`${C.green}[SSE]${C.reset} Client connected from ${C.cyan}${caller.ip}${C.reset} (${caller.name})`);

      const server = createServerInstance(caller);
      const transport = new SSEServerTransport("/messages", res);

      const sessionId = transport.sessionId;
      transports.set(sessionId, transport);

      req.on("close", () => {
        console.log(`${C.gray}[SSE] Session ${sessionId} closed.${C.reset}`);
        transports.delete(sessionId);
      });

      await server.connect(transport);
    });

    app.post("/messages", async (req, res) => {
      const sessionId = String(req.query.sessionId || "");
      let transport = transports.get(sessionId);

      if (!transport && transports.size > 0) {
        transport = transports.values().next().value;
      }

      if (transport) {
        await transport.handlePostMessage(req, res);
      } else {
        res.status(400).json({ error: "No active SSE session found." });
      }
    });

    // Helper for handling JSON-RPC 2.0 requests over HTTP
    const handleJsonRpc = async (req: express.Request, res: express.Response) => {
      const startTime = Date.now();
      const caller = extractCallerInfo(req);
      const { jsonrpc, id, method, params } = req.body || {};

      if (jsonrpc !== "2.0") {
        return res.status(400).json({
          jsonrpc: "2.0",
          id: id ?? null,
          error: { code: -32600, message: "Invalid Request" },
        });
      }

      if (method?.startsWith("notifications/")) {
        if (id === undefined || id === null) {
          return res.status(204).end();
        }
        return res.json({ jsonrpc: "2.0", id, result: {} });
      }

      if (method === "initialize") {
        const durationMs = Date.now() - startTime;
        activityLogger.logActivity({
          caller,
          type: "rpc_method",
          name: "initialize",
          args: params,
          durationMs,
          success: true,
        });

        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            protocolVersion: params?.protocolVersion || "2024-11-05",
            capabilities: {
              tools: {
                listChanged: false,
              },
            },
            serverInfo: {
              name: CONFIG.SERVER_NAME,
              version: CONFIG.SERVER_VERSION,
            },
          },
        });
      }

      if (method === "tools/list") {
        const durationMs = Date.now() - startTime;
        activityLogger.logActivity({
          caller,
          type: "rpc_method",
          name: "tools/list",
          durationMs,
          success: true,
        });

        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            tools: globalToolRegistry.getMCPToolList(),
          },
        });
      }

      if (method === "tools/call") {
        const { name, arguments: toolArgs } = params || {};
        if (!name) {
          return res.status(400).json({
            jsonrpc: "2.0",
            id,
            error: { code: -32602, message: "Missing tool name in params" },
          });
        }
        try {
          const result = await globalToolRegistry.executeTool(name, toolArgs || {});
          const durationMs = Date.now() - startTime;
          const isError = (result as any)?.isError === true;

          activityLogger.logActivity({
            caller,
            type: "tool_call",
            name,
            args: toolArgs,
            durationMs,
            success: !isError,
            error: isError ? JSON.stringify((result as any)?.content || result) : undefined,
          });

          return res.json({
            jsonrpc: "2.0",
            id,
            result,
          });
        } catch (err: any) {
          const durationMs = Date.now() - startTime;
          activityLogger.logActivity({
            caller,
            type: "tool_call",
            name,
            args: toolArgs,
            durationMs,
            success: false,
            error: err?.message || String(err),
          });

          return res.json({
            jsonrpc: "2.0",
            id,
            result: {
              content: [{ type: "text", text: `Tool error: ${err?.message || String(err)}` }],
              isError: true,
            },
          });
        }
      }

      if (method === "resources/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { resources: [] },
        });
      }

      if (method === "prompts/list") {
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { prompts: [] },
        });
      }

      return res.status(404).json({
        jsonrpc: "2.0",
        id,
        error: { code: -32601, message: `Method '${method}' not found` },
      });
    };

    // HTTP JSON-RPC Endpoints (/ and /mcp)
    app.post("/", handleJsonRpc);
    app.post("/mcp", handleJsonRpc);

    // Browser Web UI Dashboard on GET /
    app.get("/", (req, res) => {
      const stats = activityLogger.getDailyStats();
      const tools = globalToolRegistry.getAllTools();
      const topics = docsEngine.listTopics().slice(0, 30);

      const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FWCC Knowledge Hub Dashboard</title>
  <style>
    :root {
      --bg: #0d1117;
      --card-bg: #161b22;
      --border: #30363d;
      --text: #c9d1d9;
      --text-bright: #58a6ff;
      --green: #3fb950;
      --purple: #bc8cff;
      --yellow: #d29922;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      margin: 0;
      padding: 24px;
      line-height: 1.5;
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 16px;
      margin-bottom: 24px;
    }
    .badge {
      background: rgba(63, 185, 80, 0.15);
      color: var(--green);
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 13px;
      font-weight: 600;
      border: 1px solid rgba(63, 185, 80, 0.3);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 16px;
      margin-bottom: 24px;
    }
    .card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 8px;
      padding: 16px;
    }
    .card h3 {
      margin-top: 0;
      color: var(--text-bright);
      font-size: 16px;
    }
    .stat-val {
      font-size: 28px;
      font-weight: 700;
      color: #fff;
    }
    .links a {
      color: var(--text-bright);
      text-decoration: none;
      display: block;
      margin-bottom: 6px;
    }
    .links a:hover {
      text-decoration: underline;
    }
    .tag-list {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      max-height: 180px;
      overflow-y: auto;
    }
    .tag {
      background: #21262d;
      border: 1px solid var(--border);
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 12px;
    }
    pre {
      background: #000;
      border: 1px solid var(--border);
      padding: 12px;
      border-radius: 6px;
      overflow-x: auto;
      font-size: 12px;
      color: #7ee787;
    }
  </style>
</head>
<body>
  <div class="header">
    <div>
      <h1 style="margin:0; font-size: 24px; color: #fff;">FWCC Knowledge Hub Dashboard</h1>
      <p style="margin:4px 0 0 0; color: #8b949e;">Cocos Common Slot Framework Knowledge Server & MCP Engine</p>
    </div>
    <div>
      <span class="badge">● ONLINE (Port ${CONFIG.PORT})</span>
    </div>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Active Tools</h3>
      <div class="stat-val">${tools.length}</div>
      <p style="margin: 4px 0; font-size: 13px; color: #8b949e;">MCP Tools loaded & active</p>
    </div>
    <div class="card">
      <h3>Knowledge Topics</h3>
      <div class="stat-val">${topicsCount}</div>
      <p style="margin: 4px 0; font-size: 13px; color: #8b949e;">Indexed framework topics & chunks</p>
    </div>
    <div class="card">
      <h3>Daily Requests</h3>
      <div class="stat-val">${stats.totalRequests}</div>
      <p style="margin: 4px 0; font-size: 13px; color: #8b949e;">Success rate: <b>${stats.successRatePercent}%</b> (${stats.avgDurationMs}ms avg)</p>
    </div>
  </div>

  <div class="grid">
    <div class="card">
      <h3>Server Endpoints</h3>
      <div class="links">
        <a href="/sse" target="_blank">🔗 SSE Endpoint (<code>/sse</code>)</a>
        <a href="/mcp" target="_blank">🔗 HTTP JSON-RPC Endpoint (<code>/mcp</code>)</a>
        <a href="/stats" target="_blank">📊 Daily Stats Summary (<code>/stats</code>)</a>
        <a href="/stats?format=json" target="_blank">📊 Daily Stats JSON (<code>/stats?format=json</code>)</a>
        <a href="/logs" target="_blank">📜 Live Logs View (<code>/logs</code>)</a>
        <a href="/health" target="_blank">🩺 Health Check (<code>/health</code>)</a>
      </div>
    </div>
    <div class="card">
      <h3>Sample Topics</h3>
      <div class="tag-list">
        ${topics.map((t) => `<span class="tag">${t}</span>`).join("")}
      </div>
    </div>
  </div>

  <div class="card">
    <h3>Live Activity Logs (Recent)</h3>
    <pre>${activityLogger.getDailyLogs(undefined, 10).join("\n") || "No activity logged yet today."}</pre>
  </div>
</body>
</html>`;
      res.setHeader("Content-Type", "text/html; charset=utf-8");
      return res.send(html);
    });

    // View raw or rendered markdown document directly over HTTP
    app.use("/doc", (req, res) => {
      const relPath = decodeURIComponent(req.path.replace(/^\//, "").split("?")[0]);
      const doc = docsEngine.getDoc(relPath);
      if (!doc.found || !doc.content) {
        return res.status(404).send(`<h1>404 Not Found</h1><p>Document <code>${relPath}</code> not found.</p>`);
      }

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.send(doc.content);
    });

    // Export bundled report directly over HTTP (e.g. GET /report?q=BonusGame)
    app.get("/report", (req, res) => {
      const q = String(req.query.q || req.query.query || "");
      const limit = Number(req.query.limit) || 5;
      const report = docsEngine.exportReport(q, limit);

      res.setHeader("Content-Type", "text/markdown; charset=utf-8");
      return res.send(report.markdown);
    });

    // View Daily Stats & Analytics Dashboard directly over HTTP (e.g. GET /stats or GET /stats?format=json)
    app.get("/stats", (req, res) => {
      const date = (req.query.date as string) || undefined;
      const format = (req.query.format as string) || "summary";
      const stats = activityLogger.getDailyStats(date);

      if (format === "json") {
        return res.json(stats);
      }

      const summaryText = activityLogger.formatSummaryText(date);
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.send(summaryText);
    });

    // View live activity logs directly over HTTP (e.g. GET /logs or GET /logs?limit=100)
    app.get("/logs", (req, res) => {
      const date = (req.query.date as string) || undefined;
      const limit = Number(req.query.limit) || 50;
      const logs = activityLogger.getDailyLogs(date, limit);

      res.setHeader("Content-Type", "text/plain; charset=utf-8");
      return res.send(logs.join("\n") || "No logs recorded yet.");
    });

    // Health check
    app.get("/health", (req, res) => {
      res.json({
        status: "ok",
        server: CONFIG.SERVER_NAME,
        version: CONFIG.SERVER_VERSION,
        port: CONFIG.PORT,
        sseEndpoint: `http://localhost:${CONFIG.PORT}/sse`,
        statsEndpoint: `http://localhost:${CONFIG.PORT}/stats`,
        logsEndpoint: `http://localhost:${CONFIG.PORT}/logs`,
        logsDir: activityLogger.getLogsDirectory(),
        toolsCount: globalToolRegistry.getAllTools().length,
        tools: globalToolRegistry.getAllTools().map((t) => t.name),
      });
    });

    return new Promise<void>((resolve, reject) => {
      const server = app.listen(CONFIG.PORT, () => {
        console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
        console.log(`${C.brightCyan}|${C.reset}                     ${C.bold}${C.brightGreen}SERVER READY AND LISTENING${C.reset}                   ${C.brightCyan}|${C.reset}`);
        console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Web Dashboard  : ${C.brightGreen}http://localhost:${CONFIG.PORT}/${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} SSE Endpoint   : ${C.cyan}http://localhost:${CONFIG.PORT}/sse${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} HTTP Endpoint  : ${C.cyan}http://localhost:${CONFIG.PORT}/mcp${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Stats Analytics: ${C.cyan}http://localhost:${CONFIG.PORT}/stats${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Live Logs View : ${C.cyan}http://localhost:${CONFIG.PORT}/logs${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Doc Viewer     : ${C.cyan}http://localhost:${CONFIG.PORT}/doc/<relPath>${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Report Engine  : ${C.cyan}http://localhost:${CONFIG.PORT}/report?q=<query>${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Health Check   : ${C.cyan}http://localhost:${CONFIG.PORT}/health${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Active Tools   : ${C.brightGreen}${totalTools} tools loaded${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Logs Root      : ${C.gray}${activityLogger.getLogsDirectory()}${C.reset}`);
        console.log(`  ${C.yellow}*${C.reset} Docs Root      : ${C.gray}${CONFIG.DOCS_DIR}${C.reset}`);
        console.log(`${C.brightCyan}+------------------------------------------------------------------+${C.reset}\n`);
      });

      server.on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
          console.error(
            `${C.brightRed}[Port Conflict Error]${C.reset} Port ${CONFIG.PORT} is already in use by another process.\n` +
              `Please terminate the existing process or start with PORT=<custom_port> npm run dev.`
          );
        } else {
          console.error(`${C.brightRed}[Server Error]${C.reset}`, err);
        }
        reject(err);
      });
    });
  }
}

bootstrap().catch((err) => {
  console.error(`${C.yellow}[Fatal Error]${C.reset} Unable to start MCP Server:`, err);
  process.exit(1);
});
