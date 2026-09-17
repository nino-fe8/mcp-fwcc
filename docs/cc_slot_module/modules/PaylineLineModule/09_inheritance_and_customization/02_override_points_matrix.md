---
id: "cc_slot_module:PaylineLineModule:inheritance:override_points_matrix"
title: "PaylineLineModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineLineModule Override Points & Extension Matrix

<!-- convention-summary-start -->
### PaylineLineModule Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Safe to Replace | Extension Purpose |
| :--- | :--- | :--- | :--- |
| `showPayLine` | Optional | YES | Implement custom line drawing or shaders. |
| `blinkAllPayLines` | Optional | YES | Customize Stage 1 concurrent line animations. |
| `clearAll` | Recommended | YES | Reset custom graphics buffers and return nodes to pool. |
| `getLine` | No | YES | Inject custom pooling mechanisms. |
