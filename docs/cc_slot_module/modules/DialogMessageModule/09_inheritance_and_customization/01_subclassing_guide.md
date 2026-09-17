---
id: "cc_slot_module:DialogMessageModule:inheritance:subclassing_guide"
title: "DialogMessageModule Subclassing Guide"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ DialogMessageModule Subclassing Guide

<!-- convention-summary-start -->
### DialogMessageModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `DialogMessageModule`.
2. Do not override `onLoad()`; implement `onLoadExtend()`.
3. In `onDestroy()`, invoke `super.onDestroy()` to release observer bindings.
