---
id: "cc_network:recipes:network_troubleshooting_and_sentry"
title: "Network Troubleshooting Diagnostics & Sentry Error Tracing"
category: "cc_network"
tags: ["recipes", "troubleshooting", "sentry", "diagnostics", "latency"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛠️ Recipe: Network Troubleshooting Diagnostics & Sentry Error Tracing

<!-- convention-summary-start -->
### Network Troubleshooting Diagnostics & Sentry Error Tracing Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Network Troubleshooting Diagnostics & Sentry Error Tracing.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 04_recipes_and_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 🔍 Diagnostic Tools in `cc-network`

1. **Heartbeat & Latency Inspector**:
   - `SocketManager` measures round-trip time on every ping/pong exchange.
   - Logs moving average latency: `pong - latency: %sms, average latency: %sms`.
   - When latency exceeds threshold (e.g. > 1,500ms), triggers `POOR_CONNECTION` warning.
2. **Sentry Scope Enrichment**:
   - When `globalNetwork.registerGame(gameData)` executes, it tags the global Sentry instance with:
     ```javascript
     Sentry.configureScope(function(scope) {
         scope.setExtra("gameId", gameId);
     });
     ```
   - Unhandled network errors (`TransportError`, `upgradeError`, `CAN_NOT_CONNECT_EVENT`) automatically include the active game title, token prefix, and device OS specifications.
