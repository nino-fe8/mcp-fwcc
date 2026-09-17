---
id: "cc_core_lib:BonusGameWriter:api:properties"
title: "BonusGameWriter Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BonusGameWriter", "bonus_game_writer", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BonusGameWriter` Detailed Properties & Schema

<!-- convention-summary-start -->
### BonusGameWriter Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriter Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `BonusGameWriter`. |
| **`cellId`** | `number): IScriptWriter[]` | Collection of elements managed by `BonusGameWriter`. |

---

## 2. State Mutation Guardrails

All state fields in `BonusGameWriter` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
