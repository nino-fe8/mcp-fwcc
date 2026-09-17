---
id: "cc_slot_module:BonusGameTableModule:properties:injected_services"
title: "BonusGameTableModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameTableModule Injected Services

<!-- convention-summary-start -->
### BonusGameTableModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`BonusTableConfig`** | `this._config` | Reads `COL_NUMBER`, `ROW_NUMBER`, `WIDTH_STEP`, `HEIGHT_STEP`. |
| **`BonusTableData`** | `this._data` | Reads `getBonusValue()` and `getBonusGameMatrix()`. |
