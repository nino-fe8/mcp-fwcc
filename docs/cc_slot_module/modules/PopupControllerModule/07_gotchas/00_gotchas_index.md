---
id: "cc_slot_module:PopupControllerModule:gotchas:index"
title: "PopupControllerModule Gotchas Index"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PopupControllerModule Gotchas Index

<!-- convention-summary-start -->
### PopupControllerModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_initial_child_activation_gotcha.md`, `./02_unreported_active_popup_check.md`
- **Related Docs**: [`01_initial_child_activation_gotcha`](./01_initial_child_activation_gotcha.md), [`02_unreported_active_popup_check`](./02_unreported_active_popup_check.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_initial_child_activation_gotcha`](./01_initial_child_activation_gotcha.md)** | Child Popups Visible on Frame 0 | MEDIUM | Because `onLoad` forces `child.active = true`, child popup prefabs must hide themselves in `start()`. |
| **[`02_unreported_active_popup_check`](./02_unreported_active_popup_check.md)** | Stale Non-Popup Children in Hierarchy | HIGH | Placing background blocks or non-popup nodes under `Popup` causes `isDisplayPopup()` to always return true, freezing spin inputs. |
