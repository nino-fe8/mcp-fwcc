---
id: "cc_slot_module:SlotCustomNodePool:recipe:custom_multi_spine_template_pool"
title: "Production Recipe: Multi-Spine Template Node Pooling"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "recipes", "multi_spine", "template_pooling"]
---

# 💡 Production Recipe: Multi-Spine Template Node Pooling

<!-- convention-summary-start -->
### Production Recipe: Multi-Spine Template Node Pooling Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Recipe: Multi-Spine Template Node Pooling.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 08_recipes
- **Scope & Code Paths**: `SymbolNormal.prefab`, `SymbolWildDragon.prefab`, `template = SymbolNormal.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Use Case
A game features standard paying card symbols (`SymbolNormal.prefab`) alongside a heavyweight Dragon Wild with interactive particle emitters (`SymbolWildDragon.prefab`).

---

## 2. Inspector Setup & Integration
1. Attach `MultipleSymbolManager` to `Canvas/Director/GameMode/.../SymbolPool`.
2. Assign `template = SymbolNormal.prefab` (`initCount = 25`).
3. Add entry to `specialSymbolTemplates`:
   - `symbolCode: "WILD"`
   - `template: SymbolWildDragon.prefab`
   - `initCount: 5`
4. Run simulator and verify `SlotCustomNodePool` maintains isolated pools for each asset type.
