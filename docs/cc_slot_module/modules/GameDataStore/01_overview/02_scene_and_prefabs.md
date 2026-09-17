---
id: "cc_slot_module:GameDataStore:overview:scene_and_prefabs"
title: "GameDataStore Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameDataStore Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### GameDataStore Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameDataStore` resides on the `Canvas/Director` node:

```text
Canvas/Director [Node]
├── GameConfig (GameConfig)
├── GameDataStore (GameDataStore)
├── GameInit (GameInit)
└── GameDirector (GameDirector)
```

---

## 2. Downstream Reactive Consumers

`GameDataStore` syncs state across all active mode sub-nodes via `updateDataModules()`:
- `Canvas/Director/GameMode/MainGamePrefab/SlotTableModule` (`SlotTableData`)
- `Canvas/Director/GameMode/MainGamePrefab/SlotTablePaylineModule` (`SlotTablePaylineData`)
- `Canvas/Director/GameMode/BonusGamePrefab/BonusTable` (`BonusTableData`)
- `Canvas/Director/UIManager/Wallet` (`WalletModule`)
- `Canvas/Director/UIManager/Bet` (`BetModule`)
