---
id: "cc_slot_module:GameConfig:overview:scene_and_prefabs"
title: "GameConfig Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["GameConfig", "game_config", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ GameConfig Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### GameConfig Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameConfig Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `GameConfig` resides on the `Canvas/Director` node:

```text
Canvas/Director [Node]
├── GameConfig (Component: GameConfig)
├── GameDataStore (Component: GameDataStore)
├── GameInit (Component: GameInit)
└── GameDirector (Component: GameDirector)
```

---

## 2. Inspector Properties

| Property | Type | Default | Usage |
| :--- | :--- | :--- | :--- |
| `TABLE_FORMAT` | `number[]` | `[3, 3, 3, 3, 3]` | Default table grid format (columns and row count). |
| `PAY_SYSTEM` | `PAY_SYSTEM_ENUM` | `PAY_SYSTEM_ENUM.ALL_WAY` | Active win evaluation paradigm. |
| `IS_DEBUG` | `boolean` | `false` | Enables runtime verbose logs. |
