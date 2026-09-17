---
id: "cc_core_lib:LightningGame:api:properties"
title: "LightningGame Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["LightningGame", "lightning_game", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `LightningGame` Detailed Properties & Schema

<!-- convention-summary-start -->
### LightningGame Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LightningGame Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spinButton`** | `SpinButtonLightningManager` | Operational field tracking state in `LightningGame`. |
| **`game`** | `Game, mode: number)` | Operational field tracking state in `LightningGame`. |

---

## 2. State Mutation Guardrails

All state fields in `LightningGame` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
