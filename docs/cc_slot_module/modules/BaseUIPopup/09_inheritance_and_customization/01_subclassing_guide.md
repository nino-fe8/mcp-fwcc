---
id: "cc_slot_module:BaseUIPopup:inheritance:subclassing_guide"
title: "BaseUIPopup Subclassing Guide"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BaseUIPopup Subclassing Guide

<!-- convention-summary-start -->
### BaseUIPopup Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

1. Inherit from `BaseUIPopup`.
2. Implement `onLoadExtend()`, invoking `super.onLoadExtend()`.
3. Call `this.togglePopup(true)` or `this.togglePopup(false)` to open and close the modal.
4. Bind the close button click to `closeAllPopups()`.
