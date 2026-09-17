---
id: "cc_slot_module:PaylineFactory:inheritance:game_creation_workflow"
title: "PaylineFactory Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 PaylineFactory Game Creation Setup Workflow

<!-- convention-summary-start -->
### PaylineFactory Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Setup Checklist

1. **Attach Component**: Add `PaylineFactory` to `SlotTablePaylineModule`.
2. **Add PoolItems**: In Inspector, define `PoolItem` entries for each payline prefab (`WinFrame`, `LineSpark`).
3. **Set Initial Preload Counts**: Configure reasonable `initCount` values (e.g. 15 for 5x3 grids).
