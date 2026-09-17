---
id: "cc_core_lib:BetHistoryManager:api:properties"
title: "BetHistoryManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryManager", "bet_history_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### BetHistoryManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`modelData`** | `BetHistoryData` | Parsed round snapshot payload containing `{ spinId, bet, win, matrix, steps, freeSpins, multipliers }`. |
| **`betHistoryDetailManager`** | `BetHistoryDetailManager` | Operational field tracking state in `BetHistoryManager`. |
| **`betIds`** | `string` | Collection of elements managed by `BetHistoryManager`. |
| **`gameId`** | `string` | Unique game identifier string (e.g. `'9666'`, `'9000'`, `'cc1-red-cliff'`) used for scoped storage and API endpoints. |
| **`token`** | `string` | Authenticated session JWT or bearer token used for backend REST API requests. |
| **`url`** | `string` | Backend API gateway base URL for fetching round history and detailed matrix snapshots. |
| **`totalPage`** | `number` | Total number of spin steps/sub-rounds in the selected bet history record. |
| **`currentPage`** | `number` | Numeric counter or index value in `BetHistoryManager`. |
| **`itemPerPage`** | `number` | Maximum number of history summary rows or step items displayed per page (default: `10`). |
| **`customParams`** | `any` | Collection of elements managed by `BetHistoryManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetHistoryManager`. |
| **`data`** | `any): void` | Operational field tracking state in `BetHistoryManager`. |
| **`data`** | `any): void` | Operational field tracking state in `BetHistoryManager`. |
| **`index`** | `number): void` | Operational field tracking state in `BetHistoryManager`. |
| **`res`** | `any): void` | Collection of elements managed by `BetHistoryManager`. |
| **`page`** | `number, quantity: number, callback: Function, callbackErr: Function): void` | Operational field tracking state in `BetHistoryManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BetHistoryManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
