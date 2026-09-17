---
id: "cc_slot_module:TrialModeManager:overview:scene_and_prefabs"
title: "TrialModeManager Scene Node Hierarchy"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "overview", "scene_prefabs"]
---

# 🏛️ TrialModeManager Scene Node Hierarchy

<!-- convention-summary-start -->
### TrialModeManager Scene Node Hierarchy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Scene Node Hierarchy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Canonical Hierarchy Placement

Mounted under `Canvas/Director/TrialMode`:

```text
Canvas/Director/TrialMode [Component: TrialModeManager]
├── TrialModePanel [Component: cc.Node, Optional Selection Modal]
│   └── OptionHolder [Component: cc.Node, Container for Option Buttons]
│       ├── OptionFreeSpins [Component: Button]
│       ├── OptionBonusGame [Component: Button]
│       └── OptionBigWin [Component: Button]
└── BackToRealButton [Component: Button]
```
