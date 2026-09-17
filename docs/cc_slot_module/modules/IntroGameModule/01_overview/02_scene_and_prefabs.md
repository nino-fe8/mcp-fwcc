---
id: "cc_slot_module:IntroGameModule:overview:scene_and_prefabs"
title: "IntroGameModule Scene Placement & Hierarchy"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ IntroGameModule Scene Placement & Hierarchy

<!-- convention-summary-start -->
### IntroGameModule Scene Placement & Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule Scene Placement & Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Mounted on the `IntroGame` node under `Director`:

```text
Canvas/Director
└── IntroGame [Component: IntroGameModule]
    ├── Background [cc.Sprite]
    ├── ProgressBar [cc.Node]
    ├── DoNotShowAgain [cc.Toggle / cc.Node]
    └── BtnJoinGame [cc.Button]
```
