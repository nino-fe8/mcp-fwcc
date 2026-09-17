---
id: "cc_slot_module:BaseCutscene:inheritance:subclassing_guide"
title: "BaseCutscene Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BaseCutscene Subclassing & Customization Guide

<!-- convention-summary-start -->
### BaseCutscene Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `BaseCutscene`.
- Implement `enter()` to start animations and timers.
- Always call `this.exit()` when animations conclude.
