---
id: "cc_slot_module:GameDirector:overview:scene_and_prefabs"
title: "GameDirector Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameDirector Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### GameDirector Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameDirector` is the master controller on `Canvas/Director`:

```text
Canvas
└── Director (GameConfig, GameDataStore, GameInit, GameDirector)
    ├── GameMode (OnAddGameMode - Holds mode prefabs: MainGamePrefab, FreeGamePrefab, BonusGamePrefab)
    ├── UIManager (UIManagerModule - Bottom & Top HUD controls)
    ├── CutsceneControl (CutsceneController - Overlays for Big Win, Free Intro)
    ├── PopupControl (PopupControllerModule - Dialogs, Setting, Info)
    └── SlotSoundPlayer (SlotSoundPlayerModule, SoundConvertList)
```

---

## 2. Injected Mode Prefab Stack

`GameDirector` toggles visibility and active state among child prefabs in `Canvas/Director/GameMode`:
- `MainGamePrefab`: Active during Base game spins.
- `FreeGamePrefab`: Activated upon Scatter trigger.
- `BonusGamePrefab`: Activated during pick-and-click bonus mini-games.
- `FreeOptionPrefab`: Activated when volatility selection is required.
