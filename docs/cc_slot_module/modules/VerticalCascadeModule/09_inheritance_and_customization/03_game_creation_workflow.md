---
id: "cc_slot_module:VerticalCascadeModule:inheritance:game_creation_workflow"
title: "VerticalCascadeModule Game Creation Setup Workflow"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 VerticalCascadeModule Game Creation Setup Workflow

<!-- convention-summary-start -->
### VerticalCascadeModule Game Creation Setup Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Game Creation Setup Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Setup

1. In Cocos Creator, create a `CascadeModule` node inside `MainGamePrefab`.
2. Attach `VerticalCascadeModule`, `CascadeModuleData`, `CascadeModuleConfig`, and `SlotModuleEditorTag`.
3. Assign `container` to a dedicated layer node under table mask.
4. Wire `symbolManager` to `SlotSymbolManager`.
5. Verify script sequence in mode writer (`TABLE_START_RESPIN` ➔ `TABLE_STOP_RESPIN`).
