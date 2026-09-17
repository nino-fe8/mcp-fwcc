---
id: "cc_slot_module:BonusGameItemModule:gotchas:index"
title: "BonusGameItemModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameItemModule Gotchas Index

<!-- convention-summary-start -->
### BonusGameItemModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_sprite_frame_mapping_crash.md`
- **Related Docs**: [`01_missing_sprite_frame_mapping_crash`](./01_missing_sprite_frame_mapping_crash.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_sprite_frame_mapping_crash`](./01_missing_sprite_frame_mapping_crash.md)** | Blank sprite or null reference when opening a prize chest. | Server returns a prize ID not mapped in `itemSfList`. | 🔴 High (Visual Defect) |
