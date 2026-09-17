---
id: "cc_network:ServiceRest:overview"
title: "ServiceRest Module Architecture & HTTP Client"
category: "cc_network"
tags: ["ServiceRest", "http", "rest", "api", "xmlhttprequest"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 🌐 `ServiceRest` Module Architecture & HTTP Client

<!-- convention-summary-start -->
### ServiceRest Module Architecture & HTTP Client Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for ServiceRest Module Architecture & HTTP Client.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, ServiceRest
- **Scope & Code Paths**: `../../../../../../assets/cc-common/cc-network/game-network.js`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source Location**: Compiled in [`assets/cc-common/cc-network/game-network.js`](../../../../../../assets/cc-common/cc-network/game-network.js)
- **Role**: Lightweight HTTP/REST client for asynchronous API requests (`auth/login`, history, config fetches).

---

## 1. 🏛️ Architecture & Role Specification

`ServiceRest` wraps browser and native `XMLHttpRequest` objects with slot-specific error handling:
1. **Singleton Access**: Available through `ServiceRest.getInstance('cc')`.
2. **Payload Serialization**: Supports URL query encoding and JSON body serialization with proper `Content-Type: application/json` headers.
3. **Error & Retry Callbacks**: Dispatches distinct `callback({data})` and `callbackErr(error)` handlers, ensuring UI is notified of network timeouts.
