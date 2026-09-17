---
id: "cc_core_lib:AlignFullScreenButtonWrapper:api:properties"
title: "AlignFullScreenButtonWrapper Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["AlignFullScreenButtonWrapper", "align_full_screen_button_wrapper", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `AlignFullScreenButtonWrapper` Detailed Properties & Schema

<!-- convention-summary-start -->
### AlignFullScreenButtonWrapper Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AlignFullScreenButtonWrapper Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`alignFunc`** | `any` | Operational field tracking state in `AlignFullScreenButtonWrapper`. |
| **`position`** | `number` | Numeric counter or index value in `AlignFullScreenButtonWrapper`. |
| **`element`** | `any): void` | Operational field tracking state in `AlignFullScreenButtonWrapper`. |

---

## 2. State Mutation Guardrails

All state fields in `AlignFullScreenButtonWrapper` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
