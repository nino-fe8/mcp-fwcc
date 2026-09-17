---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:runtime_state_variables"
title: "VerticalCascadeModule Runtime State Variables"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 VerticalCascadeModule Runtime State Variables

<!-- convention-summary-start -->
### VerticalCascadeModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime State Variables

| Variable | Type | Initial | Purpose |
| :--- | :--- | :--- | :--- |
| `matrix` | `string[][]` | `[]` | Active 2D matrix of symbol values. |
| `listTraceWay` | `string[][]` | `[]` | 2D matrix with eliminated symbols marked as `'-1'`. |
| `listSymbols` | `cc.Node[][]` | `[]` | Active 2D array of symbol node references. |
| `listDropColumns` | `number[]` | `[]` | List of column indices containing dropped symbols. |
| `listDroppedSymbols`| `cc.Node[]` | `[]` | Flat list of surviving symbols shifting downward. |
| `listNewSymbols` | `cc.Node[]` | `[]` | Flat list of newly instantiated top symbols. |
| `_hasStartRespin` | `boolean` | `false` | Flag indicating respin elimination started. |
| `_hasRespinCompleted`| `boolean` | `false` | Flag indicating respin cascade finished. |
| `_respinCB` | `Function` | `null` | Active scheduled callback for completion timeout. |
| `_stopRespinCB` | `Function` | `null` | Promise resolve callback for `stopRespin()`. |
