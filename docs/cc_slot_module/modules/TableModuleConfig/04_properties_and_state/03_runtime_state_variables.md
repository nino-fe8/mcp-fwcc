---
id: "cc_slot_module:TableModuleConfig:properties:runtime_state_variables"
title: "TableModuleConfig Runtime State Variables"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 TableModuleConfig Runtime State Variables

<!-- convention-summary-start -->
### TableModuleConfig Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`_symbolIndexes`** | `number[][] \| null` | `null` | `SYMBOL_INDEXES` getter | Cached 2D array of sequential symbol index integers. |
| **`NEAR_WIN_DELAY_STOP`** | `number` | `0` | `SlotTableNearWinModule`, `SlotTableModule` | Dynamic delay offset applied to current reel stopping phase. |
| **`RANDOM_MATRIX`** | `string[][]` | `[]` | Inspector / Dynamic overrides | Optional pre-defined fallback matrix collection. |
| **`BEAUTY_MATRIX`** | `string[][]` | `[]` | Inspector / Dynamic overrides | Optional pre-defined attract-mode matrix collection. |
