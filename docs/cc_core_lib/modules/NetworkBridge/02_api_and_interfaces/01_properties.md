---
id: "cc_core_lib:NetworkBridge:api:properties"
title: "NetworkBridge Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["NetworkBridge", "network_bridge", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `NetworkBridge` Detailed Properties & Schema

<!-- convention-summary-start -->
### NetworkBridge Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NetworkBridge Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_playInfoListeners`** | `any[]` | Collection of elements managed by `NetworkBridge`. |
| **`_commandManager`** | `any` | Operational field tracking state in `NetworkBridge`. |
| **`_eventManager`** | `any` | Operational field tracking state in `NetworkBridge`. |
| **`gameState`** | `any` | Current finite state machine state (e.g. `INIT`, `READY`, `SPINNING`, `STOPPING`, `SHOW_WIN`, `SETTLED`). |
| **`gameId`** | `string` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`groupChannelName`** | `string` | Operational field tracking state in `NetworkBridge`. |
| **`_logger`** | `any` | Operational field tracking state in `NetworkBridge`. |
| **`networkConnectFailed`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`networkConnectSuccess`** | `Function` | Collection of elements managed by `NetworkBridge`. |
| **`onUserLogout`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onCommandSuccess`** | `Function` | Collection of elements managed by `NetworkBridge`. |
| **`onJoinGameResult`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onJoinGameDenied`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onStateUpdate`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onStatePushed`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onErrorPushed`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onRequestDenied`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onLeaveGameTrial`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onJackpotWin`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onJackpotNotice`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onNoticeUserWinJP`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onEventReceived`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onEventTimeout`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`onEvent`** | `Function` | Operational field tracking state in `NetworkBridge`. |
| **`gameId`** | `string, useShortParam: boolean, network: any)` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`customLogger`** | `{ log: any` | Operational field tracking state in `NetworkBridge`. |
| **`warn`** | `any` | Operational field tracking state in `NetworkBridge`. |
| **`error`** | `any` | Operational field tracking state in `NetworkBridge`. |

---

## 2. State Mutation Guardrails

All state fields in `NetworkBridge` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
