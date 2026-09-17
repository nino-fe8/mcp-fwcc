---
id: "cc_core_lib:BetHistoryDetailData:api:properties"
title: "BetHistoryDetailData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetHistoryDetailData", "bet_history_detail_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetHistoryDetailData` Detailed Properties & Schema

<!-- convention-summary-start -->
### BetHistoryDetailData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`sessionId`** | `string` | Operational field tracking state in `BetHistoryDetailData`. |
| **`gameModeData`** | `any[]` | Contextual game mode configuration and payout tier metadata for the current replay. |
| **`currentData`** | `{ [key: string]: any` | Operational field tracking state in `BetHistoryDetailData`. |

---

## 2. State Mutation Guardrails

All state fields in `BetHistoryDetailData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
