---
id: "cc_slot_module:BaseCutscene:gotchas:index"
title: "BaseCutscene Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ BaseCutscene Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### BaseCutscene Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_missing_exit_callback_hang.md`, `./02_fullscreen_input_blocking_leak.md`
- **Related Docs**: [`01_missing_exit_callback_hang`](./01_missing_exit_callback_hang.md), [`02_fullscreen_input_blocking_leak`](./02_fullscreen_input_blocking_leak.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_missing_exit_callback_hang`](./01_missing_exit_callback_hang.md)** | Missing `this.exit()` Call Freezes Game Command Pipeline | HIGH | Failing to invoke `this.exit()` prevents `callback()` from firing, permanently hanging `ScriptExecutor` Promise. |
| **[`02_fullscreen_input_blocking_leak`](./02_fullscreen_input_blocking_leak.md)** | Stale `SHOW_FULL_DISPLAY_CUTSCENE` on Sudden Node Destruction | MEDIUM | Deactivating or destroying cutscene node without `exit()` leaves UI touches permanently disabled. |
