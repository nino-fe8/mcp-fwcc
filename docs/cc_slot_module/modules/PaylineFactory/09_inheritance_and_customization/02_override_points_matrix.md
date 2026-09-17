---
id: "cc_slot_module:PaylineFactory:inheritance:override_points_matrix"
title: "PaylineFactory Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineFactory Override Points & Extension Matrix

<!-- convention-summary-start -->
### PaylineFactory Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Super Required | Safe to Replace | Purpose |
| :--- | :--- | :--- | :--- |
| `_spawnObject` | No | YES | Custom node wrapping or component initialization. |
| `getObject` | Optional | YES | Custom pool balancing or fallbacks. |
| `returnObject` | Optional | YES | Custom resetting before returning to pool. |
