---
id: "cc_network:MessageManager:methods:initSocket"
title: "MessageManager.initSocket Method Walkthrough"
category: "cc_network"
tags: ["MessageManager", "initSocket", "socketio", "handshake", "auth"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `MessageManager.initSocket()`

<!-- convention-summary-start -->
### MessageManager.initSocket Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for MessageManager.initSocket Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `MessageManager`
- **Signature**: `initSocket(config: {socketUrl: string, token: string, apiUrl: string, urlVerifyToken?: string, games: string, env: string, device: object, serviceRest: any}): void`

---

## 1. 🔍 Method Operational Breakdown

1. **Configuration Cache**: Stores network options (`socketUrl`, `token`, `apiUrl`, `env`, `games`).
2. **Socket Instantiation**: Creates underlying `SocketManager` instance targeting `socketUrl` with query parameters `?token=...&games=...&env=...`.
3. **Event Binding**: Binds socket status callbacks (`onConnect`, `onDisconnect`, `onReconnect`, `onError`, `onEvent`).
4. **Authentication Trigger**: Upon successful socket connection, emits `auth/token/login` with device metadata and token to obtain authorized session permissions.
