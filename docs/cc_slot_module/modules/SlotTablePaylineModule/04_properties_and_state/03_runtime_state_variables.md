---
id: "cc_slot_module:SlotTablePaylineModule:properties:runtime_state_variables"
title: "SlotTablePaylineModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTablePaylineModule Runtime State Variables

<!-- convention-summary-start -->
### SlotTablePaylineModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Variables

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `paylineConfig` | `PaylineConfig` | `null` | `onLoadExtend` | Reference to configuration component. |
| `paylineSchedule`| `SlotPaylineSchedule` | `null` | `onLoadExtend` | Reference to the scheduler managing cyclic line presentation. |
| `slotTablePaylineData` | `SlotTablePaylineData` | `null` | `onLoadExtend` | Reference to data model layer. |
| `payLineEmitter` | `cc.EventTarget` | `null` | `init()` | Local event bus for coordinating child payline components. |
