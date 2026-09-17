---
id: "cc_slot_module:BonusGameDirectorModule:overview:scene_and_prefabs"
title: "BonusGameDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BonusGameDirectorModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### BonusGameDirectorModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `BonusGameDirectorModule` sits on `BonusGamePrefab` under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode/BonusGamePrefab [Node with Components]
├── [Component 1] BaseGameMode
├── [Component 2] BonusGameDirectorModule (Pick-and-click round director)
├── [Component 3] BonusGameWriterModule (Bonus script sequence generator)
├── [Component 4] GameLogicEventHandler
├── [Component 5] OnAddSlotModule
└── [Children Nodes]:
    ├── BonusTable [Node] (BonusGameTableModule, BonusTableData, BonusTableConfig)
    └── CountDown [Node] (cc.Label - Pick countdown timer)
```

---

## 2. Interactive Table Wiring

`BonusGameDirectorModule` manages `BonusTable` which houses the interactive grid of clickable chests or envelopes.
