---
id: "cc_slot_module:CoinsEffect:inheritance:subclassing_guide"
title: "CoinsEffect Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ CoinsEffect Subclassing & Customization Guide

<!-- convention-summary-start -->
### CoinsEffect Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `CoinsEffect` or `cc.Component`.
- Override `showCoinsEffect()` to incorporate 3D coin physics or dynamic color grading.
