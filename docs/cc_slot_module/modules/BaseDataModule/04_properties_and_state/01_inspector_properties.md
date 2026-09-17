---
id: "cc_slot_module:BaseDataModule:properties:inspector_properties"
title: "BaseDataModule Inspector Properties"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BaseDataModule Inspector Properties

<!-- convention-summary-start -->
### BaseDataModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`registeredKeys`** | `string[]` | `[]` | List of state slice keys this data module observes in `GameDataStore`. |
