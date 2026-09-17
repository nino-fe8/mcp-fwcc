---
id: "cc_slot_mechanics:StickySymbolData:inheritance:override_points_matrix"
title: "StickySymbolData Override Points Matrix"
category: "cc_slot_mechanics"
tags: ["StickySymbolData", "sticky_symbol_data", "cc_slot_mechanics", "inheritance", "override_matrix"]
---

# 🧩 StickySymbolData Override Points Matrix

<!-- convention-summary-start -->
### StickySymbolData Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StickySymbolData Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Method | Safe to Override? | Required Super Call |
| :--- | :--- | :--- |
| **`onloadExtend()`** | `YES` | `Recommended` |
| **`cleanStickyIndexes()`** | `YES` | `Recommended` |
| **`isFinishSticky()`** | `YES` | `Recommended` |
| **`getStickyIndexes()`** | `YES` | `Recommended` |
| **`getStickyDataFromProperty()`** | `YES` | `Recommended` |
