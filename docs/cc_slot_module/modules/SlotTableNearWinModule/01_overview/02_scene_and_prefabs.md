---
id: "cc_slot_module:SlotTableNearWinModule:overview:scene_and_prefabs"
title: "SlotTableNearWinModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ SlotTableNearWinModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### SlotTableNearWinModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `SlotTableNearWinModule` resides on `SlotTableModule` and wires its child `VFX_NearWin` node:

```text
MainGamePrefab
└── SlotTableModule [Node]
    ├── SlotTableModule
    ├── TableModuleConfig
    ├── SlotTableData
    ├── SlotTableNearWinModule (Component: SlotTableNearWinModule)
    ├── SlotModuleEditorTag
    └── VFX_NearWin [Child Node] (Component: sp.Skeleton - Anticipation VFX skeleton)
```

---

## 2. Inspector Wiring

- **`nearWinEffect`**: Injected/wired to child `VFX_NearWin` skeleton node.
- When near-win tension triggers, `SlotTableNearWinModule` moves `VFX_NearWin` to the corresponding column's X position and enables the Spine animation.
