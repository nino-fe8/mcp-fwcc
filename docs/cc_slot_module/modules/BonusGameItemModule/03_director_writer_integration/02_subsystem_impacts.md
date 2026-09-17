---
id: "cc_slot_module:BonusGameItemModule:director_writer:subsystem_impacts"
title: "BonusGameItemModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BonusGameItemModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### BonusGameItemModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystem Impact Matrix

| Action | `BonusGameDirectorModule` | `SlotSoundPlayerModule` | Local Render |
| :--- | :--- | :--- | :--- |
| `onClickItem` | Receives `CLICK_ITEM` event | Optional `soundBoxClick` | Flags `isSelected = true` |
| `playAnimOpen` | Notified via callback | Plays `soundBoxOpen` SFX | Switches `itemSprite.spriteFrame` |
| `dim` | None | None | Applies `colorDim` tint |
