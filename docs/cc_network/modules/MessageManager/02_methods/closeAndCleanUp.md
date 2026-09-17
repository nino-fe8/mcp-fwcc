---
id: "cc_network:MessageManager:methods:closeAndCleanUp"
title: "MessageManager.closeAndCleanUp Method Walkthrough"
category: "cc_network"
tags: ["MessageManager", "closeAndCleanUp", "disconnect", "cleanup", "memory_leak"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `MessageManager.closeAndCleanUp()`

<!-- convention-summary-start -->
### MessageManager.closeAndCleanUp Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for MessageManager.closeAndCleanUp Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `MessageManager`
- **Signature**: `closeAndCleanUp(): void`

---

## 1. 🔍 Method Logic & Walkthrough

Executes a complete, leak-free teardown of the network stack when player exits the game or logs out:
1. Cancels active token extension intervals (`_stopIntervalExtendToken`).
2. Cleans up all registered `CommandManager` instances across services.
3. Clears pending packet queues and removes event listeners from `EventManager`.
4. Closes underlying WebSocket connection via `SocketManager.close()` and sets socket state to `KILLED`.
