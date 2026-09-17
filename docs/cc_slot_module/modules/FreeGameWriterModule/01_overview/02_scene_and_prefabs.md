---
id: "cc_slot_module:FreeGameWriterModule:overview:scene_and_prefabs"
title: "FreeGameWriterModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FreeGameWriterModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### FreeGameWriterModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Inspected live from production scenes (`g9000L` / `g9666L`), `FreeGameWriterModule` is co-located with `FreeGameDirectorModule` on `FreeGamePrefab`:

```text
Canvas/Director/GameMode/FreeGamePrefab [Node]
├── FreeGameDirectorModule
└── FreeGameWriterModule (Script Generator Component)
```

---

## 2. Free Game Script Queue Generation

Generates sequential scripts for Free Spins, handling multiplier increases, sticky wilds, and scatter re-triggers before triggering win evaluations.
