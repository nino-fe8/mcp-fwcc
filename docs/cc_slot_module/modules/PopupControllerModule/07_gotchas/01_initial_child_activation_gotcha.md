---
id: "cc_slot_module:PopupControllerModule:gotchas:initial_child_activation_gotcha"
title: "Gotcha: Child Popups Visible on Frame 0"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "activation"]
---

# ⚠️ Gotcha: Child Popups Visible on Frame 0

<!-- convention-summary-start -->
### Gotcha: Child Popups Visible on Frame 0 Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Child Popups Visible on Frame 0.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`PopupControllerModule.onLoad()` forces `child.active = true` for every child node to trigger their internal component registration. If child scripts do not hide themselves in `start()`, modals remain visible on screen.

---

## 2. Prevention

All popup components inheriting from `BaseUIPopup` must hide their visual views in `start()` or rely on `FadePopupBehavior` opacity masking.
