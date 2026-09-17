---
id: "cc_core_lib:PaylineInfoData:api:properties"
title: "PaylineInfoData Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["PaylineInfoData", "payline_info_data", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `PaylineInfoData` Detailed Properties & Schema

<!-- convention-summary-start -->
### PaylineInfoData Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoData Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`winText`** | `string` | Operational field tracking state in `PaylineInfoData`. |
| **`lineText`** | `string` | Operational field tracking state in `PaylineInfoData`. |
| **`creditText`** | `string` | Operational field tracking state in `PaylineInfoData`. |
| **`paylineInfo`** | `any` | Operational field tracking state in `PaylineInfoData`. |
| **`showing`** | `boolean` | Boolean flag indicating whether showing is enabled or active in `PaylineInfoData`. |
| **`isAllWays`** | `boolean` | Boolean flag indicating whether allways is enabled or active in `PaylineInfoData`. |
| **`isAllWays`** | `any): void` | Boolean flag indicating whether allways is enabled or active in `PaylineInfoData`. |
| **`winText`** | `any, lineText: any, creditText: any): void` | Operational field tracking state in `PaylineInfoData`. |
| **`paylineInfo`** | `any): void` | Operational field tracking state in `PaylineInfoData`. |
| **`showing`** | `any): void` | Operational field tracking state in `PaylineInfoData`. |

---

## 2. State Mutation Guardrails

All state fields in `PaylineInfoData` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
