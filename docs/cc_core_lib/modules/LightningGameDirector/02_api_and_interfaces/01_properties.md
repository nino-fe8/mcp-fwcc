---
id: "cc_core_lib:LightningGameDirector:api:properties"
title: "LightningGameDirector Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["LightningGameDirector", "lightning_game_director", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `LightningGameDirector` Detailed Properties & Schema

<!-- convention-summary-start -->
### LightningGameDirector Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LightningGameDirector Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`_writer`** | `LightningGameWriter` | Operational field tracking state in `LightningGameDirector`. |
| **`game`** | `Game, gameMode: any)` | Operational field tracking state in `LightningGameDirector`. |
| **`data`** | `any): Promise<any>` | Operational field tracking state in `LightningGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `LightningGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `LightningGameDirector`. |
| **`data`** | `any): Promise<boolean>` | Operational field tracking state in `LightningGameDirector`. |

---

## 2. State Mutation Guardrails

All state fields in `LightningGameDirector` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
