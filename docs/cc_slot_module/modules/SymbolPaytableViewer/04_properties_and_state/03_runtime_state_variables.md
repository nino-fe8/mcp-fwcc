---
id: "cc_slot_module:SymbolPaytableViewer:properties:runtime_state_variables"
title: "SymbolPaytableViewer Runtime State"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 SymbolPaytableViewer Runtime State

<!-- convention-summary-start -->
### SymbolPaytableViewer Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `_config` | `TableModuleConfig` | Grid dimensions and symbol metrics. |
| `_table` | `SlotTableModule` | Reference to live table component. |
| `_slotTableData`| `SlotTableData` | Reference to matrix data provider. |
