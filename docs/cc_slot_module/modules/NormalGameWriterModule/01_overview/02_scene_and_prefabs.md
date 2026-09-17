---
id: "cc_slot_module:NormalGameWriterModule:overview:scene_and_prefabs"
title: "NormalGameWriterModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ NormalGameWriterModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### NormalGameWriterModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `NormalGameWriterModule` is co-located with `NormalGameDirectorModule` on `MainGamePrefab`:

```text
Canvas/Director/GameMode/MainGamePrefab [Node]
├── NormalGameDirectorModule (Director Component)
└── NormalGameWriterModule (Script Generator Component)
```

---

## 2. Injected Script Handlers

`NormalGameWriterModule` constructs step actions routed to:
- `SlotTableModule` (`TABLE_START_SPIN`, `TABLE_STOP_SPIN`, `TABLE_FAST_STOP`)
- `SlotTablePaylineModule` (`SETUP_PAYLINES`)
- `UIManager/WinAmountPrefab` (`WinAmountModule`)
- `CutsceneControl/WinEffect` (`WinEffectModule`)
