---
id: "cc_core_lib:SpinButtonData:api:properties"
title: "SpinButtonData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpinButtonData", "spin_button_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpinButtonData` Detailed Properties & Schema

<!-- convention-summary-start -->
### SpinButtonData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinButtonData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`state`** | `number` | Numeric counter or index value in `SpinButtonData`. |
| **`spinState`** | `number` | Numeric counter or index value in `SpinButtonData`. |
| **`autoSpinCount`** | `number` | Numeric counter or index value in `SpinButtonData`. |
| **`state`** | `number): void` | Operational field tracking state in `SpinButtonData`. |
| **`count`** | `number): void` | Operational field tracking state in `SpinButtonData`. |

---

## 2. State Mutation Guardrails

All state fields in `SpinButtonData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
