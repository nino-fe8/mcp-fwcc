---
id: "cc_core_lib:BetAllwaysManager:api:properties"
title: "BetAllwaysManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BetAllwaysManager", "bet_allways_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BetAllwaysManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### BetAllwaysManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetAllwaysManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`totalCredit`** | `number` | Numeric counter or index value in `BetAllwaysManager`. |
| **`game`** | `Game)` | Operational field tracking state in `BetAllwaysManager`. |
| **`mBet`** | `any, eBet: any): void` | Operational field tracking state in `BetAllwaysManager`. |
| **`amount`** | `number): void` | Operational field tracking state in `BetAllwaysManager`. |

---

## 2. State Mutation Guardrails

All state fields in `BetAllwaysManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
