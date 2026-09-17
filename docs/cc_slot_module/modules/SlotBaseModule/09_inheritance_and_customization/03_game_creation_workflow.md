---
id: "cc_slot_module:SlotBaseModule:inheritance:game_creation_workflow"
title: "SlotBaseModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "inheritance", "workflow"]
---

# 🚀 SlotBaseModule Game Creation Workflow

<!-- convention-summary-start -->
### SlotBaseModule Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Subclassing Workflow

1. Create a TypeScript class extending `SlotBaseModule`.
2. Add `@ccclass` decorator.
3. Implement `onLoadExtend()` to cache data models from `this.gameLogic.getDataModel()`.
4. Implement `registerEvents()` for event listening.
5. Implement `resetAllEffectAndTasks()` to clear VFX on new spin.
6. Implement `onDestroy()` for observer and event unsubscription.
