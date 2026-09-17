---
id: "cc_slot_module:SlotTablePaylineData:properties:runtime_state_variables"
title: "SlotTablePaylineData Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTablePaylineData Runtime State Variables

<!-- convention-summary-start -->
### SlotTablePaylineData Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Variables

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `config` | `PaylineConfig` | `null` | `onloadExtend` | Sibling config reference. |
| `state` | `number` | `-1` | Reactive Sync | Current game mode ID (`GAME_MODE_ENUM`). |
| `isResume` | `boolean` | `false` | Reactive Sync | Reconnection / state hydration flag. |
| `registeredKeys`| `string[]` | 15 keys | Class Declaration | Keys subscribed to in `GameDataStore`. |
