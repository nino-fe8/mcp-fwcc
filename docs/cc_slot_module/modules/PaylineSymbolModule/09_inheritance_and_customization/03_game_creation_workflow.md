---
id: "cc_slot_module:PaylineSymbolModule:inheritance:game_creation_workflow"
title: "PaylineSymbolModule Game Creation Workflow"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "inheritance", "workflow"]
---

# 📋 PaylineSymbolModule Game Creation Workflow

<!-- convention-summary-start -->
### PaylineSymbolModule Game Creation Workflow Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Game Creation Workflow.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Step-by-Step Checklist for New Slot Games

1. Create a child node `WinSymbolsLayer` under `Payline`.
2. Attach `PaylineSymbolModule`.
3. In Inspector, assign `container` to a layer above reel masks.
4. Link `factory` to the active `SlotSymbolManager`.
5. Verify in `SlotSymbolModule` that symbol prefabs handle `PLAY_ANIMATION_WIN` and `DISABLE_HIGHLIGHT`.
