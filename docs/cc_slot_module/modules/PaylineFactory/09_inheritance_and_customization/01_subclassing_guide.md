---
id: "cc_slot_module:PaylineFactory:inheritance:subclassing_guide"
title: "PaylineFactory Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PaylineFactory Subclassing & Customization Guide

<!-- convention-summary-start -->
### PaylineFactory Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Guidelines

- Extend `PaylineFactory` to inject custom node initialization hooks or dynamic prefab loading via `cc.resources.load`.
