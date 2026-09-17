---
id: "cc_slot_module:JackpotModule:inheritance:subclassing_guide"
title: "JackpotModule Subclassing Guide"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ JackpotModule Subclassing Guide

<!-- convention-summary-start -->
### JackpotModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `renderAllJackpot()` to inject custom easing formulas into progressive number roll-ups.
- Override `showJackpot()` to trigger Spine banner entrance / exit animations.
