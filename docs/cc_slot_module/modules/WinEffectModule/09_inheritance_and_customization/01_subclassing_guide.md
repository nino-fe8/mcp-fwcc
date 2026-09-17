---
id: "cc_slot_module:WinEffectModule:inheritance:subclassing_guide"
title: "WinEffectModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ WinEffectModule Subclassing & Customization Guide

<!-- convention-summary-start -->
### WinEffectModule Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `WinEffectModule`.
- Key customization points:
  - Override `initValue()` and `updateCurrentTitle()` for custom tier thresholds.
  - Implement sound hooks (`playSoundStart`, `playSoundCounting`, `playSoundEnd`, `resumeMainBGM`).
