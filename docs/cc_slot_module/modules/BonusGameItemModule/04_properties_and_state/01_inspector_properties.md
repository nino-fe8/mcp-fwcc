---
id: "cc_slot_module:BonusGameItemModule:properties:inspector_properties"
title: "BonusGameItemModule Inspector Properties"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BonusGameItemModule Inspector Properties

<!-- convention-summary-start -->
### BonusGameItemModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

| Property Name | TypeScript Type | Default Value | Role |
| :--- | :--- | :--- | :--- |
| **`itemSprite`** | `cc.Sprite` | `null` | Sprite component displaying the prize frame. |
| **`itemSfList`** | `BonusItemSpriteFrame[]` | `[]` | Array mapping prize symbol ID strings to SpriteFrame assets. |
| **`colorNormal`** | `cc.Color` | `#FFFFFF` | Default untinted color when player opens a prize chest. |
| **`colorDim`** | `cc.Color` | `#646464` | Dimmed grayscale color applied to unselected chests. |
| **`soundBoxClick`**| `string` | `""` | SFX key played on chest tap. |
| **`soundBoxOpen`** | `string` | `""` | SFX key played on prize reveal. |
