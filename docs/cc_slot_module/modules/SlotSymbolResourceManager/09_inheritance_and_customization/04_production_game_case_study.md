---
id: "cc_slot_module:SlotSymbolResourceManager:customization:production_game_case_study"
title: "Production Case Study: Red Cliff Symbol Resource Manager"
category: "cc_slot_module"
tags: ["SlotSymbolResourceManager", "slot_symbol_resource_manager", "cc_slot_module", "customization", "case_study", "red_cliff"]
---

# 🎮 Production Case Study: Red Cliff Symbol Resource Manager

<!-- convention-summary-start -->
### Production Case Study: Red Cliff Symbol Resource Manager Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Production Case Study: Red Cliff Symbol Resource Manager.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `SymbolPrefab9666.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Context & Setup
In Red Cliff (`g9666L`), `SlotSymbolResourceManager` is embedded directly into `SymbolPrefab9666.prefab`. It defines textures for 11 distinct pay symbols, 3 wild stack variations, and 2 scatter triggers.

---

## 2. Production Integration Excerpt

```typescript
// Mounted on SymbolPrefab9666.prefab
// Configured lists:
// symbolSfList: ["K1", "K2", "K3", "K4", "A", "K", "Q", "J", "10", "WILD", "SCATTER"]
// blurSymbolSfList: ["K1_BLUR", "K2_BLUR", ...]
// symbolSkeletons: [{ symbolCode: "WILD", skeletonData: WildSpineAsset }, ...]
```
