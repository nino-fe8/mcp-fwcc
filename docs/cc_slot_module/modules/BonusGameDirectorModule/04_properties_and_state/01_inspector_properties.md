---
id: "cc_slot_module:BonusGameDirectorModule:properties:inspector_properties"
title: "BonusGameDirectorModule Inspector Properties"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BonusGameDirectorModule Inspector Properties

<!-- convention-summary-start -->
### BonusGameDirectorModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`labelCountDown`** | `cc.Label` | `null` | Label node displaying auto-pick countdown timer. |
| **`defaultCountDown`** | `number` | `15` | Default duration (in seconds) before auto-selection triggers. |
| **`gameMode`** | `GAME_MODE_ENUM` | `BONUS_GAME` (`4`) | Mode identifier enum. |
| **`moduleList`** | `cc.Node[]` | `[]` | Array of child chest/item manager components. |
