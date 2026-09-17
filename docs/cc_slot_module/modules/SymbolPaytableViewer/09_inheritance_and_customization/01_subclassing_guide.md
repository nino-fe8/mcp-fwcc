---
id: "cc_slot_module:SymbolPaytableViewer:inheritance:subclassing_guide"
title: "SymbolPaytableViewer Subclassing Guide"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SymbolPaytableViewer Subclassing Guide

<!-- convention-summary-start -->
### SymbolPaytableViewer Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Mount on Table root node alongside `TableModuleConfig` and `SlotTableModule`.
2. Connect `touchHolder`, `bgNode`, `topBlock`, and `symbolPayoutViewer`.
