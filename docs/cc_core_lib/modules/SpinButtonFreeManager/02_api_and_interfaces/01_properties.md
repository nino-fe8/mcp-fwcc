---
id: "cc_core_lib:SpinButtonFreeManager:api:properties"
title: "SpinButtonFreeManager Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpinButtonFreeManager", "spin_button_free_manager", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpinButtonFreeManager` Detailed Properties & Schema

<!-- convention-summary-start -->
### SpinButtonFreeManager Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinButtonFreeManager Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`game`** | `Game)` | Operational field tracking state in `SpinButtonFreeManager`. |

---

## 2. State Mutation Guardrails

All state fields in `SpinButtonFreeManager` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
