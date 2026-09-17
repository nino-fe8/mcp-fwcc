---
id: "cc_slot_module:IntroGameModule:inheritance:subclassing_guide"
title: "IntroGameModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ IntroGameModule Subclassing & Customization Guide

<!-- convention-summary-start -->
### IntroGameModule Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `IntroGameModule`.
- Override `onClickJoinGame()` for custom animated modal dismissals or analytics tracking.
