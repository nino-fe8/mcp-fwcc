---
id: "cc_slot_module:SlotTableNearWinModule:properties:runtime_state_variables"
title: "SlotTableNearWinModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SlotTableNearWinModule Runtime State Variables

<!-- convention-summary-start -->
### SlotTableNearWinModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal Variables Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `_isSkipEffect` | `boolean` | `false` | `setupNearWin` | Set to `true` when Turbo mode is active, bypassing overlay playback. |
| `config` | `TableModuleConfig` | `null` | `onLoadExtend` | Reference to sibling configuration component. |
| `_startX` | `number` | `0` | `initNearWinValue` | Starting X coordinate for column index `0`. |
| `_countScatter` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Scatter count in evaluated matrix. |
| `_countBonus` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Bonus count in evaluated matrix. |
| `_countJp` | `number` | `0` | `setupNearWin`, `resetNearWin` | Cumulative Jackpot count in evaluated matrix. |
| `_nearWinData` | `any[]` | `[]` | `setupNearWin`, `resetNearWin` | Per-column anticipation data matrix (`{ isNearWin, ... }`). |
| `_nearWinAnim` | `any` | `null` | `_getAnimNearWin` | Cached `sp.Skeleton` or `cc.Animation` instance. |
| `_nearWinSymbols`| `cc.Node[]`| `[]` | `initNearWinValue` | Cached symbol node references. |
