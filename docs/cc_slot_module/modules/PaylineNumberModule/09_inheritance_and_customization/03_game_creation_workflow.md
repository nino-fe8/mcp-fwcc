---
id: "cc_slot_module:PaylineNumberModule:inheritance:game_creation_workflow"
title: "PaylineNumberModule Game Creation & Gutter Setup Workflow"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 PaylineNumberModule Game Creation & Gutter Setup Workflow

<!-- convention-summary-start -->
### PaylineNumberModule Game Creation & Gutter Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule Game Creation & Gutter Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. **Create Gutter Nodes**: Place `LeftGutter` and `RightGutter` nodes alongside table borders.
2. **Add Badges**: Add child sprite nodes named `num_1`, `num_2` ... `num_N`, attaching `PaylineNumberItem` to each.
3. **Attach Module**: Attach `PaylineNumberModule` to `SlotTablePaylineModule` or `BoardG`.
4. **Wire Containers**: Drag `[LeftGutter, RightGutter]` into the `container` property array in Inspector.
