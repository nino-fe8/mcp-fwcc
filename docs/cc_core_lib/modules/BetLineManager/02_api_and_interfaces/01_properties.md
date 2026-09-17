---
id: "cc_core_lib:BetLineManager:api:properties"
title: "BetLineManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetLineManager", "bet_line_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetLineManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### BetLineManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetLineManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`betLineNumber`** | `number` | Numeric counter or index value in `BetLineManager`. |
| **`maxBetLine`** | `number` | Numeric counter or index value in `BetLineManager`. |
| **`config`** | `any` | Operational field tracking state in `BetLineManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetLineManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetLineManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BetLineManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
