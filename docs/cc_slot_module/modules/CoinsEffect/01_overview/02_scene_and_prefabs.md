---
id: "cc_slot_module:CoinsEffect:overview:scene_and_prefabs"
title: "CoinsEffect Scene Placement & Hierarchy"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ CoinsEffect Scene Placement & Hierarchy

<!-- convention-summary-start -->
### CoinsEffect Scene Placement & Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Scene Placement & Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

Mounted as a child node under win modals:

```text
Canvas/Director/CutsceneControl
├── WinEffect
│   └── WinInfo
│       └── CoinsEffect [Component: CoinsEffect]
│           └── CoinParticle [cc.ParticleSystem]
└── TotalWin
    └── coinsEffect [Component: CoinsEffect]
```
