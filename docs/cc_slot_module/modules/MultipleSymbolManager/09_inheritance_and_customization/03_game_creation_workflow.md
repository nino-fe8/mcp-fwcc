---
id: "cc_slot_module:MultipleSymbolManager:customization:game_creation_workflow"
title: "MultipleSymbolManager Game Creation Workflow Checklist"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "workflow"]
---

# 🚀 MultipleSymbolManager Game Creation Workflow Checklist

<!-- convention-summary-start -->
### MultipleSymbolManager Game Creation Workflow Checklist Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Game Creation Workflow Checklist.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Integration Checklist

1. Attach `MultipleSymbolManager` to `SlotTableModule/SymbolPool`.
2. Set default standard normal template in `template`.
3. Fill `specialSymbolTemplates` array with each unique special Spine symbol.
4. Link `SlotTableModule.symbolManager` to this node.
