---
id: "cc_slot_module:SlotTableData:properties:runtime_state_variables"
title: "SlotTableData Runtime Reactive State Variables"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "properties", "runtime_state", "registeredKeys"]
---

# 📊 SlotTableData Runtime Reactive State Variables

<!-- convention-summary-start -->
### SlotTableData Runtime Reactive State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Runtime Reactive State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Reactive State Slices

| Property Key | Type | Origin Payload | Description |
| :--- | :--- | :--- | :--- |
| `matrix0` | `string[]` | Server socket response | Raw 1D table matrix before symbol transformations / wild overlays. |
| `matrix` | `string[]` | Server socket response | Final 1D table matrix for current spin round. |
| `normalGameMatrix` | `string[]` | Server session hydration | Saved normal game matrix for restoring base game when exiting Free Spins. |
| `freeGameMatrix` | `string[]` | Server session hydration | Saved free game matrix for restoring Free Spins on browser reconnection. |
