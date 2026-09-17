---
id: "cc_slot_module:SlotTableData:customization:subclassing_guide"
title: "SlotTableData Subclassing & Customization Guide"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "subclassing", "inheritance"]
---

# 🏗️ SlotTableData Subclassing & Customization Guide

<!-- convention-summary-start -->
### SlotTableData Subclassing & Customization Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Subclassing & Customization Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Principles & Guidelines

* 🟢 **Declare Custom `registeredKeys`**: When subclassing, append game-specific server keys (e.g. `stickyWilds`, `expandingColumns`) so `GameDataStore` automatically routes them.
* 🟢 **Override `getMatrix()`**: For non-standard grid transformations (triangular boards, cluster grids).
* 🛑 **Preserve `onloadExtend()`**: Ensure `this.config = this.getComponent(TableModuleConfig)` is called if overridden.
