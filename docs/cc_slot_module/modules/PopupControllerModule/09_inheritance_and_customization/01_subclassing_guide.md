---
id: "cc_slot_module:PopupControllerModule:inheritance:subclassing_guide"
title: "PopupControllerModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PopupControllerModule Subclassing Guide

<!-- convention-summary-start -->
### PopupControllerModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `isDisplayPopup()` to filter out background blocker dialogs or system toast notifications.
