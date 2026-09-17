---
id: "cc_slot_module:CoinsEffect:inheritance:override_points_matrix"
title: "CoinsEffect Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 CoinsEffect Override Points & Extension Matrix

<!-- convention-summary-start -->
### CoinsEffect Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `showCoinsEffect` | Optional | Custom particle activation or sound triggering. |
| `hideCoinsEffect` | Optional | Custom particle teardown and cleanup. |
