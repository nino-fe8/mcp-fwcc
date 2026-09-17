---
id: "cc_slot_module:PortraitBetModule:inheritance:subclassing_guide"
title: "PortraitBetModule Subclassing Guide"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PortraitBetModule Subclassing Guide

<!-- convention-summary-start -->
### PortraitBetModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `PortraitBetModule`.
2. Connect `minBetBtn` and `maxBetBtn` in the Inspector.
3. Call `super.setupObserver()` to retain base BetData watchers.
