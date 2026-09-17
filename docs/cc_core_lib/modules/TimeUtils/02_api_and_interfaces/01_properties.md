---
id: "cc_core_lib:TimeUtils:api:properties"
title: "TimeUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["TimeUtils", "time_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `TimeUtils` Detailed Properties & Schema

<!-- convention-summary-start -->
### TimeUtils Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TimeUtils Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`ts`** | `number, format: string): string` | Collection of elements managed by `TimeUtils`. |
| **`date`** | `Date, formatString: string): string` | Operational field tracking state in `TimeUtils`. |
| **`ts`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`ts`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`ts`** | `number, timeFormat?: string, breakLine?: boolean): string` | Collection of elements managed by `TimeUtils`. |
| **`i`** | `number): string` | Operational field tracking state in `TimeUtils`. |
| **`secs`** | `number): string` | Collection of elements managed by `TimeUtils`. |
| **`endTime`** | `number, serverTime: number, millisecond?: number): number` | Duration in seconds or milliseconds controlling timing behavior. |

---

## 2. State Mutation Guardrails

All state fields in `TimeUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
