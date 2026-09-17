---
id: "cc_slot_module:SlotBaseModule:properties_and_state:runtime_state_variables"
title: "SlotBaseModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotBaseModule Runtime State Variables

<!-- convention-summary-start -->
### SlotBaseModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State

| Variable | Type | Initial | Description |
| :--- | :--- | :--- | :--- |
| `moduleEvent` | `GameModuleEvent` | `null` | Mode-scoped event bus instance. |
| `gameMode` | `any` | `null` | Active mode identifier (`NORMAL_GAME`, `FREE_GAME`, `BONUS_GAME`). |
