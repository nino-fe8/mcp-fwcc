---
id: "cc_slot_module:GameModeDirectorModule:overview:scene_and_prefabs"
title: "GameModeDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameModeDirectorModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### GameModeDirectorModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), mode directors sit on individual mode prefabs under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode
├── MainGamePrefab [Node]
│   ├── [Component 1] BaseGameMode
│   ├── [Component 2] NormalGameDirectorModule (Extends GameModeDirectorModule)
│   ├── [Component 3] NormalGameWriterModule (Extends GameModeWriterModule)
│   ├── [Component 4] GameLogicEventHandler
│   └── [Component 5] OnAddSlotModule
└── FreeGamePrefab [Node]
    ├── [Component 1] BaseGameMode
    ├── [Component 2] FreeGameDirectorModule (Extends GameModeDirectorModule)
    ├── [Component 3] FreeGameWriterModule (Extends GameModeWriterModule)
    ├── [Component 4] GameLogicEventHandler
    └── [Component 5] OnAddSlotModule
```

---

## 2. Injected Mode Children (`moduleList`)

The active director manages sibling modules placed directly beneath its mode prefab:
- `SlotTableModule` (Matrix & reel table orchestrator)
- `SlotTablePaylineModule` (Payline visual presentation)
- `TransformSymbolModule` (Symbol transformations & mega symbols)
- `SymbolManger` (SlotSymbolManager)
