---
id: "cc_slot_module:BonusGameTableModule:gotchas:index"
title: "BonusGameTableModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameTableModule Gotchas Index

<!-- convention-summary-start -->
### BonusGameTableModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_box_prefab_crash.md`
- **Related Docs**: [`01_missing_box_prefab_crash`](./01_missing_box_prefab_crash.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_missing_box_prefab_crash`](./01_missing_box_prefab_crash.md)** | `TypeError: Cannot read property 'instantiate' of null` when entering Bonus Game. | `boxPrefab` property unassigned in Cocos Creator Inspector. | 🔴 Critical (Crash on Entry) |
