---
id: "cc_slot_module:MultipleSymbolManager:recipe:custom_special_templates_setup"
title: "Production Recipe: Multiple Symbol Manager Setup in Scene"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "recipes", "scene_setup"]
---

# 💡 Production Recipe: Multiple Symbol Manager Setup in Scene

<!-- convention-summary-start -->
### Production Recipe: Multiple Symbol Manager Setup in Scene Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Multiple Symbol Manager Setup in Scene.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `template = SymbolStandard.prefab`, `template = WildSpinePrefab.prefab`, `template = ScatterSpinePrefab.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Setup
Replace the default `SlotSymbolManager` with `MultipleSymbolManager` whenever a game demands separate prefabs for high-tier Wilds or Scatters.

---

## 2. Configuration Workflow
1. In `MainGamePrefab`, select `SlotTableModule/SymbolPool`.
2. Remove `SlotSymbolManager` component and add `MultipleSymbolManager`.
3. Set `template = SymbolStandard.prefab`.
4. Add items in `specialSymbolTemplates`:
   - Item 0: `symbolCode = "WILD"`, `template = WildSpinePrefab.prefab`, `initCount = 5`.
   - Item 1: `symbolCode = "SCATTER"`, `template = ScatterSpinePrefab.prefab`, `initCount = 5`.
