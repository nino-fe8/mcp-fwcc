---
id: "cc_slot_module:SlotButtonModule:inheritance:subclassing_guide"
title: "SlotButtonModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotButtonModule Subclassing Guide

<!-- convention-summary-start -->
### SlotButtonModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Strategy

- Subclass `SlotButtonModule` for mode-specific variants (`SlotButtonNormal`, `SlotButtonFree`, `SlotButtonLightning`).
- Override `onTouchStart()` or `onSpinClick()` to dispatch appropriate `GameLogicUIEvents`.
- Override `setupObserver()` to watch custom data model properties.
