---
id: "cc_core_lib:JsbUtils:api:properties"
title: "JsbUtils Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["JsbUtils", "jsb_utils", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `JsbUtils` Detailed Properties & Schema

<!-- convention-summary-start -->
### JsbUtils Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JsbUtils Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`text`** | `string): void` | Operational field tracking state in `JsbUtils`. |
| **`url`** | `string, spriteA: any, defaultAvatar: any, AvatarAtlas: any): void` | Backend API gateway base URL for fetching round history and detailed matrix snapshots. |
| **`avatarSprite`** | `any, ava: any, atlas: any, prefix?: string, leadingZeroLength?: number, avatarDefault?: string): boolean` | Operational field tracking state in `JsbUtils`. |

---

## 2. State Mutation Guardrails

All state fields in `JsbUtils` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
