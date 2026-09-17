---
id: "cc_slot_module:BaseUIPopup:inheritance:override_points_matrix"
title: "BaseUIPopup Override Points Matrix"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 BaseUIPopup Override Points Matrix

<!-- convention-summary-start -->
### BaseUIPopup Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | `public` | Mandatory | Inits `popupBehavior` animation delegate. |
| `togglePopup` | `public` | Recommended | Triggers show/hide transitions. |
| `closeAllPopups` | `public` | Optional | Plays sound and dismisses all dialogs. |
| `playSfxClick` | `public` | Optional | Plays audio click feedback. |
