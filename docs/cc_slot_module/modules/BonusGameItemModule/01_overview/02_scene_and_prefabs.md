---
id: "cc_slot_module:BonusGameItemModule:overview:scene_and_prefabs"
title: "BonusGameItemModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BonusGameItemModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### BonusGameItemModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Instantiation inside `BonusTable`

`BonusGameItemModule` prefabs are instantiated as dynamic children of `BonusGamePrefab/BonusTable`:

```text
Canvas/Director/GameMode/BonusGamePrefab/BonusTable
├── Item_0 (BonusGameItemModule)
│   ├── SpineChest (sp.Skeleton - Idle/Open animation)
│   └── WinLabel (cc.Label - Prize amount)
├── Item_1 (BonusGameItemModule)
└── ...
```

---

## 2. Interactive Click Events

Each item attaches a `cc.Button` or touch event listener routing click coordinates back to `BonusGameTableModule.onItemClicked(itemIndex)`.
