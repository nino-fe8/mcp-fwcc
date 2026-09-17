---
id: "cc_network:globalNetworkV3:variables"
title: "globalNetworkV3 Variables & Fields Dictionary"
category: "cc_network"
tags: ["globalNetworkV3", "variables", "state"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📋 `globalNetworkV3` Variables & Fields Dictionary

<!-- convention-summary-start -->
### globalNetworkV3 Variables & Fields Dictionary Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for globalNetworkV3 Variables & Fields Dictionary.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_network, globalNetworkV3
- **Scope & Code Paths**: `assets/cc-common/cc-network/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Instance Properties & References

| Variable | Type | Description |
| :--- | :--- | :--- |
| `this.gamesData` | `Object` | Key-value store caching registered game state metadata. |
| `this.token` | `string \| null` | Currently authenticated user token. |
| `messageManager` | `MessageManager` | Singleton reference to underlying socket manager (`gameNetwork.MessageManager.getInstance()`). |
| `serviceRest` | `ServiceRest` | Singleton REST service client (`ServiceRest.getInstance('cc')`). |
| `logger` | `Object` | Network logging bridge wired to `cc.log`, `cc.log`, and `cc.warn`. |
