---
id: "cc_slot_module:FreeOptionDirectorModule:gotchas:index"
title: "FreeOptionDirectorModule Gotchas Index"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ FreeOptionDirectorModule Gotchas Index

<!-- convention-summary-start -->
### FreeOptionDirectorModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_tween_memory_leak_on_interrupted_countdown.md`, `./02_double_click_race_condition_network_spam.md`, `./03_missing_localization_key_freeze.md`
- **Related Docs**: [`01_tween_memory_leak_on_interrupted_countdown`](./01_tween_memory_leak_on_interrupted_countdown.md), [`02_double_click_race_condition_network_spam`](./02_double_click_race_condition_network_spam.md), [`03_missing_localization_key_freeze`](./03_missing_localization_key_freeze.md)
<!-- convention-summary-end -->


## 1. Master Gotchas Index

| Gotcha Slug | Defect Description | Root Cause | Impact Level |
| :--- | :--- | :--- | :--- |
| **[`01_tween_memory_leak_on_interrupted_countdown`](./01_tween_memory_leak_on_interrupted_countdown.md)** | Countdown timer continues firing in background after user selects an option or leaves the scene. | Omitting `stopCountDown()` inside `optionClick()` or `onDestroy()`. | 🔴 Critical (Memory Leak) |
| **[`02_double_click_race_condition_network_spam`](./02_double_click_race_condition_network_spam.md)** | Fast double-tapping sends duplicate requests to backend, generating protocol desync errors. | Buttons not disabled synchronously on the first touch event. | 🔴 Critical (Protocol Desync) |
| **[`03_missing_localization_key_freeze`](./03_missing_localization_key_freeze.md)** | Timer label renders `undefined 15s` or crashes due to missing string keys. | Failure to populate `FREE_OPTION_GAME_REMIND` in game text tables. | 🟡 Medium (Visual Glitch) |
