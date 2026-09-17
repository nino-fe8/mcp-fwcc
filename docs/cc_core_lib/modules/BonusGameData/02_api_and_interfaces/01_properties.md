---
id: "cc_core_lib:BonusGameData:api:properties"
title: "BonusGameData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BonusGameData", "bonus_game_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BonusGameData` Detailed Properties & Schema

<!-- convention-summary-start -->
### BonusGameData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`selectedBoxId`** | `number` | Numeric counter or index value in `BonusGameData`. |
| **`boxId`** | `number): void` | Operational field tracking state in `BonusGameData`. |

---

## 2. State Mutation Guardrails

All state fields in `BonusGameData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
