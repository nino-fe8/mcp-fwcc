---
id: "cc_slot_module:MultipleSymbolManager:customization:subclassing_guide"
title: "MultipleSymbolManager Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ MultipleSymbolManager Subclassing & Customization Guide

<!-- convention-summary-start -->
### MultipleSymbolManager Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Principles & Guidelines

* 🟢 **Subclass for Custom Special Template Selection**: Override `getSymbolFromPool` if symbol codes are dynamically decorated by bet tier or active multiplier.
* 🛑 **Preserve Base Delegation**: Always pass allocations to `this.symbolPool`.
