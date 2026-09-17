---
id: "cc_slot_module:LoadingScreenModule:inheritance:subclassing_guide"
title: "LoadingScreenModule Subclassing Guide"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ LoadingScreenModule Subclassing Guide

<!-- convention-summary-start -->
### LoadingScreenModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Rules
- Override `updateLabelProgress()` to customize font styling or localized percentage messages.
- Always call `super.onDestroy()` to release Howler listeners and clear running tweens.
