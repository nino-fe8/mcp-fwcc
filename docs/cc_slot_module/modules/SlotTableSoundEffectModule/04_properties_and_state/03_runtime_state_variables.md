---
id: "cc_slot_module:SlotTableSoundEffectModule:properties:runtime_state_variables"
title: "SlotTableSoundEffectModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTableSoundEffectModule Runtime State Variables

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Variables Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `countBonus` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Bonus symbols landed in current spin. |
| `countScatter` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Scatter symbols landed in current spin. |
| `countJackpot` | `number` | `0` | `onReelStartSound`, `onReelStopSound` | Cumulative count of Jackpot symbols landed in current spin. |
| `tableConfig` | `TableModuleConfig`| `null` | `onLoadExtend` | Reference to sibling configuration component. |
