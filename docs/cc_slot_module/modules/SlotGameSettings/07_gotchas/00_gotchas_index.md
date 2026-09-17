---
id: "cc_slot_module:SlotGameSettings:gotchas:index"
title: "SlotGameSettings Gotchas Index"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "gotchas", "fast_to_result", "index"]
---

# ⚠️ SlotGameSettings Gotchas Index

<!-- convention-summary-start -->
### SlotGameSettings Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotGameSettings Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_fast_to_result_unhandled_skips.md`
- **Related Docs**: [`01_fast_to_result_unhandled_skips`](./01_fast_to_result_unhandled_skips.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_fast_to_result_unhandled_skips`](./01_fast_to_result_unhandled_skips.md)** | Visual artifacts or lingering spine tweens remaining on screen when player triggers fast-to-result (FTR) spin. | Custom visual modules failing to check `gameSettings.isFastToResult` inside animation callbacks. | 🟠 High (Visual De-sync) |
