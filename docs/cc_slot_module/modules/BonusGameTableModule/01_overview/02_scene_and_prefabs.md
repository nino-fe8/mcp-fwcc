---
id: "cc_slot_module:BonusGameTableModule:overview:scene_and_prefabs"
title: "BonusGameTableModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BonusGameTableModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### BonusGameTableModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `BonusGameTableModule` sits on `BonusTable` inside `BonusGamePrefab`:

```text
Canvas/Director/GameMode/BonusGamePrefab
└── BonusTable [Node with Components]
    ├── [Component 1] BonusGameTableModule (Item grid layout & pick router)
    ├── [Component 2] BonusTableData (Ingests available picks and prizes)
    ├── [Component 3] BonusTableConfig (Layout geometry & countdown timers)
    └── [Dynamically Spawned Children]:
        ├── Item_0 (BonusGameItemModule)
        ├── Item_1 (BonusGameItemModule)
        └── ...
```

---

## 2. Interactive Item Spawning

Dynamically spawns interactive chest/box instances (`BonusGameItemModule`) across the configured grid slots.
