---
id: "cc_slot_module:BaseDataModule:properties:runtime_state_variables"
title: "BaseDataModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 BaseDataModule Runtime State Variables

<!-- convention-summary-start -->
### BaseDataModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Variables Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`isRegistered`** | `boolean` | `false` | `GameDataStore.registerModule()` | Tracks if this instance is actively registered in the data store. |
| **`gameMode`** | `number` | `undefined` | `onLoad()` | Game mode constant copied from `this.baseMode.gameMode`. |
| **`[key: string]`** | `any` | `null` | `onDataUpdate()`, `clearData()` | Dynamic storage slots for all registered key values. |
