import { ToolDefinition } from "../core/types.js";
import { ActivityLogger } from "../core/activity_logger.js";

export function createStatsTools(activityLogger: ActivityLogger): ToolDefinition[] {
  return [
    {
      name: "fwcc_get_daily_stats",
      description: "Get daily usage statistics and performance metrics of FWCC Knowledge MCP Server (total calls, success/error rates, calls per tool, calls per user/IP, hourly distribution).",
      inputSchema: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description: "Date string in 'YYYY-MM-DD' format (e.g. '2026-08-28'). Defaults to today.",
          },
          format: {
            type: "string",
            enum: ["summary", "json"],
            description: "Output format: 'summary' (formatted readable text table) or 'json' (raw structured JSON). Default is 'summary'.",
            default: "summary",
          },
        },
      },
      handler: async (args: { date?: string; format?: "summary" | "json" }) => {
        const targetDate = args.date;
        const format = args.format || "summary";
        const stats = activityLogger.getDailyStats(targetDate);

        if (format === "json") {
          return {
            content: [
              {
                type: "text",
                text: JSON.stringify(stats, null, 2),
              },
            ],
          };
        }

        const summaryText = activityLogger.formatSummaryText(targetDate);
        return {
          content: [
            {
              type: "text",
              text: summaryText,
            },
          ],
        };
      },
    },
    {
      name: "fwcc_get_activity_logs",
      description: "Get chronological activity logs showing AI agents/users interacting with FWCC Knowledge MCP Server.",
      inputSchema: {
        type: "object",
        properties: {
          date: {
            type: "string",
            description: "Date string in 'YYYY-MM-DD' format (e.g. '2026-08-28'). Defaults to today.",
          },
          limit: {
            type: "number",
            description: "Maximum number of recent log entries to retrieve (default: 50).",
            default: 50,
          },
        },
      },
      handler: async (args: { date?: string; limit?: number }) => {
        const limit = args.limit || 50;
        const logs = activityLogger.getDailyLogs(args.date, limit);

        if (logs.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No activity logs found for date: ${args.date || "today"}.`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: "text",
              text: `=== FWCC Activity Logs (${args.date || "today"} - Last ${logs.length} entries) ===\n` + logs.join("\n"),
            },
          ],
        };
      },
    },
    {
      name: "fwcc_about",
      description: "Get a comprehensive introduction and capability overview of FWCC Knowledge Hub MCP Server (what it is, indexed documentation, graph relations, game recipes, transfer knowledge system, and supported operations).",
      inputSchema: {
        type: "object",
        properties: {},
      },
      handler: async () => {
        const overview = {
          name: "mcp-fwcc (Cocos Creator cc-common Slot Framework Knowledge Hub)",
          version: "1.0.0",
          purpose: "Comprehensive Engineering Knowledge Hub and Conceptual Graph Engine dedicated to Cocos Creator 2.4.x slot game development using ARK Studio's cc-common / cc-slot-module SDK.",
          architecture: {
            transport: "HTTP JSON-RPC 2.0 (port 8925) & SSE (Server-Sent Events) with Web Dashboard & RESTful document viewer",
            engines: "MiniSearch Vector Indexing (19,400+ chunks, 6,900+ topics) + Bi-directional Conceptual Graph Engine + Transfer Knowledge Repository"
          },
          capabilityGroups: {
            "1. Deep Documentation Search & Retrieval": [
              "fwcc_search_docs (semantic & keyword search across 6900+ topics)",
              "fwcc_search_exact (exact token matching for class/method/variable names)",
              "fwcc_get_doc (read full markdown document)",
              "fwcc_read_chunk (retrieve localized context chunk)",
              "fwcc_search_topic (fast topic-level search)",
              "fwcc_read_batch (read multiple documentation files in single call)",
              "fwcc_list_topics (list indexed topics by category/module)"
            ],
            "2. Semantic Graph & Relationship Navigation": [
              "fwcc_get_class_api (retrieve methods, variables, and inheritance map of a class)",
              "fwcc_get_related_topics (discover conceptual neighbors and caller/callee paths)",
              "fwcc_get_backlinks (find all documents linking to a topic)",
              "fwcc_get_events_map (lookup SlotEvent, GameLogicUIEvent, and EventManager bindings)",
              "fwcc_get_graph_neighbors (inspect graph node connections)",
              "fwcc_export_report (compile multi-topic engineering report to markdown)"
            ],
            "3. Game Implementation & Change Profiles": [
              "fwcc_list_game_profiles (inspect configured game profiles e.g. g9666 Red Cliff)",
              "fwcc_get_game_profile (retrieve game-specific modules, configs, and prefabs)",
              "fwcc_update_game_profile (update game mechanics configurations)",
              "fwcc_get_logic_changelog (track business logic diffs and feature changes)"
            ],
            "4. Transfer Knowledge & QA Bug Gotchas": [
              "fwcc_record_transfer_knowledge (record new solved bugs, patterns, and Gotchas)",
              "fwcc_list_transfer_knowledge (list transfer-ark repository entries)",
              "fwcc_ai_document_bug (AI-assisted standardization of bugs following CONVENTION.md)"
            ],
            "5. Editor Sync & Live Reminders": [
              "fwcc_auto_sync_editor (sync knowledge with active editor session)",
              "fwcc_sync_doc_update (hot-reload modified documentation files)"
            ],
            "6. Activity Tracking & Performance Analytics": [
              "fwcc_get_daily_stats (daily requests, success rate, per-tool usage, hourly breakdown)",
              "fwcc_get_activity_logs (chronological agent interaction logs)"
            ]
          }
        };

        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(overview, null, 2),
            },
          ],
        };
      },
    },
  ];
}
