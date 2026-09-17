---
id: "cc_slot_module:TurboButton:inheritance:subclassing_guide"
title: "TurboButton Subclassing Guide"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ TurboButton Subclassing Guide

<!-- convention-summary-start -->
### TurboButton Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `playSfxTurbo()` to integrate rich sound banks with pitch shifts.
- Override `onTurboActive()` to trigger full-screen speed warp visual shaders.
