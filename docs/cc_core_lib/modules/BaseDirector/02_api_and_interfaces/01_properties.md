---
id: "cc_core_lib:BaseDirector:api:properties"
title: "BaseDirector Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["BaseDirector", "base_director", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `BaseDirector` Detailed Properties & Schema

<!-- convention-summary-start -->
### BaseDirector Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDirector Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game` | Operational field tracking state in `BaseDirector`. |
| **`dataStore`** | `CoreDataStore` | Central reactive state store (`GameDataStore`) containing session data, bet matrices, and server responses. |
| **`eventManager`** | `EventManager` | Global event bus singleton for cross-module communication. |
| **`gameModeManager`** | `GameModeManager` | Operational field tracking state in `BaseDirector`. |
| **`name`** | `string` | Operational field tracking state in `BaseDirector`. |
| **`lastAction`** | `string` | Operational field tracking state in `BaseDirector`. |
| **`_scripts`** | `any` | Collection of elements managed by `BaseDirector`. |
| **`_writer`** | `any` | Operational field tracking state in `BaseDirector`. |
| **`game`** | `Game)` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any, data?: any): Promise<any>` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any): void` | Operational field tracking state in `BaseDirector`. |
| **`actionName`** | `any): void` | Operational field tracking state in `BaseDirector`. |

---

## 2. State Mutation Guardrails

All state fields in `BaseDirector` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
