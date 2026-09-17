---
id: "cc_slot_module:BetHistoryModule:inheritance:subclassing_guide"
title: "BetHistoryModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetHistoryModule Subclassing Guide

<!-- convention-summary-start -->
### BetHistoryModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Rules

1. Inherit from `BetHistoryModule`.
2. Override `onLoadExtend()` and invoke `super.onLoadExtend()` to ensure observer bindings.
3. Configure `itemPerPage` in `onLoadExtend()` or Inspector.
4. Do not override `onLoad()` directly.
5. In `onDestroy()`, invoke `super.onDestroy()` to release model observers.
