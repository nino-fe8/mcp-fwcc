---
id: "cc_slot_module:SlotTableData:properties:inspector_properties"
title: "SlotTableData Inspector Properties Reference"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "properties", "inspector_properties"]
---

# 🎛️ SlotTableData Inspector Properties Reference

<!-- convention-summary-start -->
### SlotTableData Inspector Properties Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Inspector Properties Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Component Configuration & References

| Property Field | Type | Binding Method | Purpose |
| :--- | :--- | :--- | :--- |
| `config` | `TableModuleConfig` | Co-located `getComponent(TableModuleConfig)` | Reference to sibling configuration component providing `TABLE_FORMAT`. |
| `registeredKeys` | `string[]` | Static definition (`["matrix0", "matrix", "normalGameMatrix", "freeGameMatrix"]`) | Declares reactive keys subscribed to from `GameDataStore`. |
