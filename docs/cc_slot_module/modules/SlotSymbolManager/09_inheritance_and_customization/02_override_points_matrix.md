---
id: "cc_slot_module:SlotSymbolManager:customization:override_points_matrix"
title: "SlotSymbolManager Extension Points Matrix"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 SlotSymbolManager Extension Points Matrix

<!-- convention-summary-start -->
### SlotSymbolManager Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`instantiateNewSymbol()`** | Instantiates `this.template` | `YES` | Optional | Custom dynamic prefab injection or component binding. |
| **`sortSymbols(symbols)`** | Bucket sort by `layerConfig` | `YES` | Optional | Custom multi-dimensional layer sorting (e.g. Gigablox dimensions). |
| **`initSymbolPool()`** | Loops `initCount` into `NodePool` | `YES` | `RECOMMENDED` | Pre-warming multi-tier pools for multiple symbol sizes. |
| **`resetAllEffectAndTasks()`**| Virtual placeholder | `YES` | None | Clear active Spine tweens on table reset. |
