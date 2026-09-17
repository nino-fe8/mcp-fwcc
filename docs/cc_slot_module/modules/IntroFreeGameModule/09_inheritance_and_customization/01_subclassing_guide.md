---
id: "cc_slot_module:IntroFreeGameModule:inheritance:subclassing_guide"
title: "IntroFreeGameModule Subclassing Guide"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ IntroFreeGameModule Subclassing Guide

<!-- convention-summary-start -->
### IntroFreeGameModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

- Subclass `IntroFreeGameModule` or `BaseCutscene`.
- Implement Spine transition animations inside `enter()`.
