---
id: "cc_slot_module:PopupControllerModule:gotchas:unreported_active_popup_check"
title: "Gotcha: Stale Non-Popup Children in Hierarchy"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "gotchas", "hierarchy"]
---

# ⚠️ Gotcha: Stale Non-Popup Children in Hierarchy

<!-- convention-summary-start -->
### Gotcha: Stale Non-Popup Children in Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Stale Non-Popup Children in Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`isDisplayPopup()` iterates over `this.node.children.some(child => child.active)`. If developers place a permanent static backdrop or debug node as a direct child of `Canvas/Director/Popup`, `isDisplayPopup()` permanently returns `true`, locking the spin button.

---

## 2. Prevention

Only place interactive modal popup roots directly under `Canvas/Director/Popup`.
