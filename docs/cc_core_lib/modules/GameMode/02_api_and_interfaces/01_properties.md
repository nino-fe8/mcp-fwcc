---
id: "cc_core_lib:GameMode:api:properties"
title: "GameMode Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["GameMode", "game_mode", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `GameMode` Detailed Properties & Schema

<!-- convention-summary-start -->
### GameMode Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameMode Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `GameMode`. |
| **`name`** | `string` | Operational field tracking state in `GameMode`. |
| **`mode`** | `any` | Operational field tracking state in `GameMode`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`director`** | `any` | Operational field tracking state in `GameMode`. |
| **`onExitCb`** | `any` | Operational field tracking state in `GameMode`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `GameMode`. |

---

## 2. State Mutation Guardrails

All state fields in `GameMode` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
