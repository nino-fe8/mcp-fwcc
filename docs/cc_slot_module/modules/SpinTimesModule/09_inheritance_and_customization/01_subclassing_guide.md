---
id: "cc_slot_module:SpinTimesModule:inheritance:subclassing_guide"
title: "SpinTimesModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SpinTimesModule Subclassing Guide

<!-- convention-summary-start -->
### SpinTimesModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `updateSpinTimes()` to handle custom text formatting (e.g. `SPIN 5 OF 10`).
- Override `resetSpinTimes()` to trigger particle dissipate effects.
