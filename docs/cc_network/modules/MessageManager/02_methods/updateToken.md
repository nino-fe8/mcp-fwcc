---
id: "cc_network:MessageManager:methods:updateToken"
title: "MessageManager.updateToken Method Walkthrough"
category: "cc_network"
tags: ["MessageManager", "updateToken", "token_refresh", "session"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📖 `MessageManager.updateToken()`

<!-- convention-summary-start -->
### MessageManager.updateToken Method Walkthrough Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for MessageManager.updateToken Method Walkthrough.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 02_methods
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Declaring Class**: `MessageManager`
- **Signature**: `updateToken(newToken: string): void`

---

## 1. 🔍 Method Logic & Walkthrough

Updates active session credentials during gameplay without forcing full socket disconnects:
1. Validates that `newToken` is non-empty.
2. Updates internal `this._config.token = newToken`.
3. Notifies `PlayerInfoStateManager` to update stored user token.
4. Emits `update-token` packet over active WebSocket connection so server associates current socket session with the refreshed token.
