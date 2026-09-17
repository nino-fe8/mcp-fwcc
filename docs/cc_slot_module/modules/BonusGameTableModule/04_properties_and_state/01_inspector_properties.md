---
id: "cc_slot_module:BonusGameTableModule:properties:inspector_properties"
title: "BonusGameTableModule Inspector Properties"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BonusGameTableModule Inspector Properties

<!-- convention-summary-start -->
### BonusGameTableModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`boxPrefab`** | `cc.Prefab` | `null` | Item prefab containing `BonusGameItemModule`, `cc.Button`, and `cc.Sprite`. |
| **`openAllBoxDelay`** | `number` | `3` | Delay (in seconds) during end-of-round reveal before completing. |
