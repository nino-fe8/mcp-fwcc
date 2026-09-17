---
id: "cc_slot_module:IntroFreeGameModule:overview:scene_and_prefabs"
title: "IntroFreeGameModule Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ IntroFreeGameModule Scene Node Hierarchy

<!-- convention-summary-start -->
### IntroFreeGameModule Scene Node Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroFreeGameModule Scene Node Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Placement

Located under `Canvas/Director/CutsceneControl/IntroFreeGame`:

```text
Canvas/Director/CutsceneControl
└── IntroFreeGame [Component: IntroFreeGameModule]
    ├── Background [cc.Sprite]
    ├── SpineBanner [sp.Skeleton]
    └── FreeSpinCountLabel [cc.Label]
```
