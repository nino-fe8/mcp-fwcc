---
id: "cc_network:MessageManager:overview"
title: "MessageManager Module Architecture & Session Coordinator"
category: "cc_network"
tags: ["MessageManager", "socket", "session", "handshake", "token", "websocket"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📡 `MessageManager` Module Architecture & Session Coordinator

<!-- convention-summary-start -->
### MessageManager Module Architecture & Session Coordinator Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for MessageManager Module Architecture & Session Coordinator.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, MessageManager
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: Compiled in [`assets/cc-common/cc-network/game-network.js`](../../../../../../assets/cc-common/cc-network/game-network.js)
- **Role**: Primary singleton managing Socket.io connection lifecycle, token authentication handshake, and routing between engine and server.

---

## 1. 🏛️ Architecture & Role Specification

`MessageManager` acts as the single source of truth for the active WebSocket channel. It ensures:
1. **Singleton Access**: Available globally via `MessageManager.getInstance()`.
2. **Socket Verification Handshake**: Connects to the backend gateway and dispatches authentication payload to `auth/token/login`.
3. **Session State Tracking**: Stores server session ID (`sId`), token renewal timers (`_startIntervalExtendToken`), and handles unexpected network drops.
4. **Packet Dispatching**: Marshals outbound gameplay commands from `CommandManager` into socket frames.
