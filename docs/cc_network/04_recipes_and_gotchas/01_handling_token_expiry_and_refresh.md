---
id: "cc_network:recipes:handling_token_expiry_and_refresh"
title: "Handling Token Expiry and Dynamic Session Renewal"
category: "cc_network"
tags: ["recipes", "token", "refresh_token", "session_expiry", "gotchas"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🛠️ Recipe: Handling Token Expiry and Dynamic Session Renewal

<!-- convention-summary-start -->
### Handling Token Expiry and Dynamic Session Renewal Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for Handling Token Expiry and Dynamic Session Renewal.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, 04_recipes_and_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 📌 Problem & Context
In long-running slot game sessions, the initial authentication token may expire. Forcing a full page reload or complete socket disconnection degrades player experience and risks interrupting active auto-spin or free-spin rounds.

---

## 2. ⚡ Solution Architecture

The network kernel supports seamless in-flight token extension:
1. **Refresh Token Lookup**: `connectNetworkV3.getRefreshToken()` retrieves the long-lived refresh token stored in `localStorage['user-refresh-token']`.
2. **REST API Renewal**: Dispatches an asynchronous request to the authentication endpoint (`auth/refresh-token`).
3. **In-Flight Socket Sync**: Once the new access token is returned, invokes:
   ```typescript
   MessageManager.getInstance().updateToken(newToken);
   ```
4. **Zero-Disconnect Handshake**: The socket emits `update-token` packet over the active connection, updating server session credentials without severing the TCP/WebSocket link.
