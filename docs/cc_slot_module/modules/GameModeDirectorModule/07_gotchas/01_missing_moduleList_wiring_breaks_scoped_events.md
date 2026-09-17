---
id: "cc_slot_module:GameModeDirectorModule:gotcha:missing_moduleList_wiring"
title: "Gotcha: Missing moduleList Wiring Breaks Scoped Event Bus"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "gotchas", "moduleList", "GameModuleEvent"]
---

# 🛑 Gotcha: Missing `moduleList` Wiring Breaks Scoped Event Bus

<!-- convention-summary-start -->
### Gotcha: Missing moduleList Wiring Breaks Scoped Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing moduleList Wiring Breaks Scoped Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Defect
When clicking the Spin button, the spin button transitions into `SPINNING` state, but the reels never turn, or payline animations never render.

---

## 2. Root Cause & Technical Defect
`SlotTableModule` and `PaylineModule` communicate with the director through `this.moduleEvent`. If these child nodes are not in the director's `moduleList` array, `setupModules()` never assigns `this.moduleEvent` to them, leaving them disconnected from all spin commands.

---

## 3. Standard Code Solution & Fix
Ensure all sibling visual controllers are dragged into the `moduleList` array in the Cocos Creator Inspector on the mode director node.
