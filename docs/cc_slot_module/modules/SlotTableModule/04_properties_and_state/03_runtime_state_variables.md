---
id: "cc_slot_module:SlotTableModule:properties:runtime_state_variables"
title: "SlotTableModule Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 SlotTableModule Runtime State Variables

<!-- convention-summary-start -->
### SlotTableModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`state`** | `TableSpinState` | `READY` (`0`) | `onChangeState()` | Active spinning state machine flag. |
| **`reels`** | `(cc.Component & IReelComponent)[]` | `[]` | `initTable()` | Array of instantiated column reel controllers. |
| **`_matrix`** | `string[][]` | `[]` | `stopSpin()`, `syncTable()` | 2D matrix array of target symbol IDs. |
| **`_lastMatrix`** | `string[][]` | `[]` | `stopSpin()`, `syncTable()` | Prior spin snapshot used for resume and diff calculations. |
| **`reelCount`** | `number` | `0` | `onReelStop()`, `startSpin()` | Number of stopped columns during active deceleration phase. |
| **`_tableStopCB`**| `Function` | `null` | `stopSpin()`, `onReelStop()` | Resolve callback for the `stopSpin()` Promise. |
| **`START_X`** | `number` | `0` | `initTable()` | Horizontal centering offset for column 0. |
| **`TOTAL_COLS`** | `number` | `5` | `getConfigValue()` | Number of columns declared in `TABLE_FORMAT`. |
| **`SYMBOL_WIDTH`**| `number` | `140` | `getConfigValue()` | Pitch distance in pixels between reel columns. |
