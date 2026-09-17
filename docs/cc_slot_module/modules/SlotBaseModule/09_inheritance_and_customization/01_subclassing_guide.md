---
id: "cc_slot_module:SlotBaseModule:inheritance:subclassing_guide"
title: "SlotBaseModule Subclassing & Extension Guide"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotBaseModule Subclassing & Extension Guide

<!-- convention-summary-start -->
### SlotBaseModule Subclassing & Extension Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Subclassing & Extension Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

1. Extend `SlotBaseModule`.
2. Do **not** override `onLoad()`. Always override `onLoadExtend()`.
3. Put event listener registrations in `registerEvents()`.
4. Put visual resets in `resetAllEffectAndTasks()`.
5. Always clean up in `onDestroy()` by releasing observers and calling `this.eventManager.targetOff(this)`.
