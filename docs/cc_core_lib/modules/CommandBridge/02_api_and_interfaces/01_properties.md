---
id: "cc_core_lib:CommandBridge:api:properties"
title: "CommandBridge Detailed Properties & Schema"
category: "cc_core_lib"
tags: ["CommandBridge", "command_bridge", "cc_core_lib", "properties", "schema", "fields"]
---

# 📋 `CommandBridge` Detailed Properties & Schema

<!-- convention-summary-start -->
### CommandBridge Detailed Properties & Schema Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CommandBridge Detailed Properties & Schema.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_core_lib, 02_api_and_interfaces
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema & Functional Roles

| Property | Type | Description |
| :--- | :--- | :--- |
| **`availableEvents`** | `any` | Collection of elements managed by `CommandBridge`. |
| **`_eventMap`** | `any` | Key-value lookup table for items in `CommandBridge`. |
| **`game`** | `Game)` | Operational field tracking state in `CommandBridge`. |
| **`events`** | `string[], callback: Function): void` | Collection of elements managed by `CommandBridge`. |
| **`event`** | `string, callback: Function): void` | Operational field tracking state in `CommandBridge`. |
| **`event`** | `string, callback: Function): void` | Operational field tracking state in `CommandBridge`. |
| **`event`** | `string, ...args: any[]): Promise<void>` | Collection of elements managed by `CommandBridge`. |

---

## 2. State Mutation Guardrails

All state fields in `CommandBridge` must be initialized during instance registration and modified strictly via designated lifecycle methods. Direct mutation from outside modules is strongly discouraged to maintain state predictability.
