---
id: "cc_slot_module:NormalGameDirectorModule:overview:scene_and_prefabs"
title: "NormalGameDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ NormalGameDirectorModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### NormalGameDirectorModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `NormalGameDirectorModule` sits on `MainGamePrefab`:

```text
Canvas/Director/GameMode/MainGamePrefab [Node]
├── BaseGameMode
├── NormalGameDirectorModule (Spin loop director)
├── NormalGameWriterModule (Script queue generator)
├── GameLogicEventHandler
├── OnAddSlotModule
└── [Child Modules Managed via moduleList]:
    ├── SlotTableModule (SlotTableModule, TableModuleConfig, SlotTableData, SlotTableNearWinModule)
    ├── SlotTablePaylineModule (SlotTablePaylineModule, PaylineConfig, SlotTablePaylineData)
    ├── TransformSymbolModule (TransformSymbolModule, TransformSymbolConfig, TransformSymbolData)
    └── SymbolManger (SlotSymbolManager)
```
