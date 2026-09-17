---
id: "cc_slot_module:BonusGameWriterModule:gotchas:index"
title: "BonusGameWriterModule Gotchas Index"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BonusGameWriterModule Gotchas Index

<!-- convention-summary-start -->
### BonusGameWriterModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_premature_unblock_before_resume.md`
- **Related Docs**: [`01_premature_unblock_before_resume`](./01_premature_unblock_before_resume.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_premature_unblock_before_resume`](./01_premature_unblock_before_resume.md)** | User can tap chest during reconnection before prior picks are visually opened. | Reversing order of `_unblockBonusGame` and `_resumeOpenedBoxes`. | 🔴 High (State Desync) |
