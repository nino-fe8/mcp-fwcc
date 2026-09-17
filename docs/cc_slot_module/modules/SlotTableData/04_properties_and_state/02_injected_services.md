---
id: "cc_slot_module:SlotTableData:properties:injected_services"
title: "SlotTableData Injected Services & Dependencies"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "properties", "injected_services", "data_store"]
---

# 💉 SlotTableData Injected Services & Dependencies

<!-- convention-summary-start -->
### SlotTableData Injected Services & Dependencies Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Injected Services & Dependencies.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services (Inherited from `BaseDataModule`)

| Service Name | Type | Injection Decorator | Role |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject(GameDataStore)` | Central data store managing game session state and socket packets. |
| `baseMode` | `SlotBaseModule` | `this.getComponent(SlotBaseModule)` | Root mode component reference. |
