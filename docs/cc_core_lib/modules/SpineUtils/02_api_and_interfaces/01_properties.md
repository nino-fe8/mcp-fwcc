---
id: "cc_core_lib:SpineUtils:api:properties"
title: "SpineUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["SpineUtils", "spine_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `SpineUtils` Detailed Properties & Schema

<!-- convention-summary-start -->
### SpineUtils Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpineUtils Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`spine`** | `sp.Skeleton): string[]` | Collection of elements managed by `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): number` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): boolean` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, name: string): boolean` | Operational field tracking state in `SpineUtils`. |
| **`spine`** | `sp.Skeleton, mixTime?: number): void` | Operational field tracking state in `SpineUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `SpineUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
