---
id: "cc_slot_module:BaseCutscene:overview:scene_and_prefabs"
title: "BaseCutscene Scene Hierarchy & Anchor Position"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ BaseCutscene Scene Hierarchy & Anchor Position

<!-- convention-summary-start -->
### BaseCutscene Scene Hierarchy & Anchor Position Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Scene Hierarchy & Anchor Position.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement

All cutscenes derived from `BaseCutscene` are organized under `Canvas/Director/CutsceneControl`:

```text
Canvas/Director/CutsceneControl [Component: CutsceneController]
├── WinEffect [Component: WinEffectModule (extends BaseCutscene)]
├── IntroFreeGame [Component: IntroFreeGameModule (extends BaseCutscene)]
├── JackpotWin [Component: JackpotWinModule (extends BaseCutscene)]
└── TotalWin [Component: TotalWinModule (extends BaseCutscene)]
```
