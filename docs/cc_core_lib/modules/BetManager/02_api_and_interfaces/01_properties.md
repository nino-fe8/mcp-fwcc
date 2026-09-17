---
id: "cc_core_lib:BetManager:api:properties"
title: "BetManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetManager", "bet_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### BetManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`config`** | `any` | Operational field tracking state in `BetManager`. |
| **`betKey`** | `string` | Operational field tracking state in `BetManager`. |
| **`betData`** | `BetData` | Operational field tracking state in `BetManager`. |
| **`minBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`maxBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`minExtraBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`maxExtraBetCircular`** | `number` | Numeric counter or index value in `BetManager`. |
| **`lastBetId`** | `string` | Operational field tracking state in `BetManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetManager`. |
| **`data`** | `string): void` | Operational field tracking state in `BetManager`. |
| **`betId`** | `any): void` | Operational field tracking state in `BetManager`. |
| **`betId`** | `any): void` | Operational field tracking state in `BetManager`. |
| **`extraBetKey`** | `string): void` | Operational field tracking state in `BetManager`. |
| **`betKey`** | `string, extraBet: string): number` | Operational field tracking state in `BetManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BetManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
