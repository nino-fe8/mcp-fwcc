---
id: "cc_slot_module:SlotSymbolModule:customization:subclassing_guide"
title: "SlotSymbolModule Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotSymbolModule Subclassing & Customization Guide

<!-- convention-summary-start -->
### SlotSymbolModule Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Principles & Guardrails

* 🛑 **NEVER delete `this.node['__SymbolModule__'] = this`** in `onLoad()`: This enables high-speed component lookup without `getComponent()`.
* 🛑 **ALWAYS invoke `super.resetBeforeBackToPool()`** when overriding teardown logic to prevent GPU memory leaks.
* 🟢 **OVERRIDE `initExtend()`** to attach custom sub-components (particle systems, floating multiplier labels).
