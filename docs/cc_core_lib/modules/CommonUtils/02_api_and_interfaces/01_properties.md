---
id: "cc_core_lib:CommonUtils:api:properties"
title: "CommonUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CommonUtils", "common_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CommonUtils` Detailed Properties & Schema

<!-- convention-summary-start -->
### CommonUtils Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CommonUtils Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`key`** | `string, value: any): void` | Operational field tracking state in `CommonUtils`. |
| **`e`** | `any): string` | Operational field tracking state in `CommonUtils`. |
| **`object`** | `any, value: any): string` | Operational field tracking state in `CommonUtils`. |
| **`object`** | `any): string[]` | Collection of elements managed by `CommonUtils`. |
| **`object`** | `any): number[]` | Collection of elements managed by `CommonUtils`. |
| **`arr`** | `any[]): string[]` | Collection of elements managed by `CommonUtils`. |
| **`arr`** | `any[], removeGameId?: boolean): any` | Collection of elements managed by `CommonUtils`. |
| **`obj`** | `any, keysMap: any): any` | Operational field tracking state in `CommonUtils`. |
| **`array`** | `any[], pickNumber?: number): any[]` | Collection of elements managed by `CommonUtils`. |
| **`userName`** | `string, maxChar?: number): string` | Operational field tracking state in `CommonUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `CommonUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
