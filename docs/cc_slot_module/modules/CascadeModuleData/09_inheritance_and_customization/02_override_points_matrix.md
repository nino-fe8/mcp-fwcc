---
id: "cc_slot_module:CascadeModuleData:inheritance:override_points_matrix"
title: "CascadeModuleData Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 CascadeModuleData Override Points & Extension Matrix

<!-- convention-summary-start -->
### CascadeModuleData Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Super Required | Return Type | Extension Purpose |
| :--- | :--- | :--- | :--- |
| `getMatrix` | No | `string[][]` | Custom mode-specific matrix mapping. |
| `getTraceWay`| No | `number[]` | Custom coordinate sorting or filtering. |
| `formatData` | No | `Object` | Custom 2D grid elimination substitution. |
