---
id: "cc_slot_module:SlotSymbolManager:recipe:dynamic_priority_z_index_sorting"
title: "Recipe: Dynamic Priority Z-Index Sorting Configuration"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "recipe", "z_index_sorting"]
---

# 🍳 Recipe: Dynamic Priority Z-Index Sorting Configuration

<!-- convention-summary-start -->
### Recipe: Dynamic Priority Z-Index Sorting Configuration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Recipe: Dynamic Priority Z-Index Sorting Configuration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `GameConfig.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Problem Statement
Ensure that Mega Scatter symbols with large Spine glow borders always render above expanding Wilds and regular payline symbols.

---

## 2. Configuration Setup

In `GameConfig.ts`:
```typescript
export const GAME_SYMBOL_CONFIG = {
    MEGA_SCATTER: { Id: "MS", Priority: 1 },  // Top layer (Rendered last)
    WILD:         { Id: "K",  Priority: 2 },
    SCATTER:      { Id: "A",  Priority: 3 },
    HIGH_PAY_1:   { Id: "H1", Priority: 4 },
    LOW_PAY_1:    { Id: "L1", Priority: 10 },
};
```
When `updateSymbolSiblingIndex()` executes, `sortSymbols()` arranges nodes matching these priorities so `MEGA_SCATTER` receives the highest Sibling Index.
