---
id: "cc_slot_module:SymbolPaytableViewer:inheritance:override_points_matrix"
title: "SymbolPaytableViewer Override Points Matrix"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 SymbolPaytableViewer Override Points Matrix

<!-- convention-summary-start -->
### SymbolPaytableViewer Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `showSymbolInfo()` | `YES` | `MANDATORY` | Custom callout VFX. |
| `hideSymbolInfo()` | `YES` | `MANDATORY` | Custom fade tweens. |
