---
id: "cc_slot_module:BaseDataModule:gotchas:index"
title: "BaseDataModule Gotchas Index"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BaseDataModule Gotchas Index

<!-- convention-summary-start -->
### BaseDataModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_registered_keys_no_update.md`, `./02_property_shadowing_getter_setter.md`, `./03_unregister_leak_on_dynamic_node_destroy.md`
- **Related Docs**: [`01_missing_registered_keys_no_update`](./01_missing_registered_keys_no_update.md), [`02_property_shadowing_getter_setter`](./02_property_shadowing_getter_setter.md), [`03_unregister_leak_on_dynamic_node_destroy`](./03_unregister_leak_on_dynamic_node_destroy.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_registered_keys_no_update`](./01_missing_registered_keys_no_update.md)** | Subclass never receives updates when backend sends data. | `registeredKeys` array omitted or spelled differently than payload property name. | 🔴 Critical (Silent Data Failure) |
| **[`02_property_shadowing_getter_setter`](./02_property_shadowing_getter_setter.md)** | Direct assignment `this[key] = value` overwrites custom class methods or getters. | Subclass defines method with the exact same name as a registered server key. | 🔴 Critical (Method Overwrite) |
| **[`03_unregister_leak_on_dynamic_node_destroy`](./03_unregister_leak_on_dynamic_node_destroy.md)** | `GameDataStore` calls `onDataUpdate()` on destroyed node component instances. | Subclass dynamically created and destroyed without removing itself from `dataStore.registeredModules`. | 🟡 High (Dangling Pointer) |
