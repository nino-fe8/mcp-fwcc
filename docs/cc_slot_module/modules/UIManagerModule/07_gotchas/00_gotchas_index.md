---
id: "cc_slot_module:UIManagerModule:gotchas:index"
title: "UIManagerModule Gotchas Index"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ UIManagerModule Gotchas Index

<!-- convention-summary-start -->
### UIManagerModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_stale_mode_ui_overlap_leak.md`, `./02_blocking_popup_keyboard_leak.md`
- **Related Docs**: [`01_stale_mode_ui_overlap_leak`](./01_stale_mode_ui_overlap_leak.md), [`02_blocking_popup_keyboard_leak`](./02_blocking_popup_keyboard_leak.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_stale_mode_ui_overlap_leak`](./01_stale_mode_ui_overlap_leak.md)** | UI Overlap from Direct Node Activations | HIGH | Direct activation of child nodes without calling `updateGameModeUI()` creates overlapping normal and free spin buttons. |
| **[`02_blocking_popup_keyboard_leak`](./02_blocking_popup_keyboard_leak.md)** | Spacebar Trigger During Cutscenes | CRITICAL | Missing `checkDisplayPopup()` validation allows players to trigger background spins during fullscreen victory modals. |
