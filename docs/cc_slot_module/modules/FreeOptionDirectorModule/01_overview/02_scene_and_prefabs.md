---
id: "cc_slot_module:FreeOptionDirectorModule:overview:scene_and_prefabs"
title: "FreeOptionDirectorModule Scene Node Placement & Prefab Structure"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "overview", "scene_prefabs", "cocos_inspection"]
---

# 🏛️ FreeOptionDirectorModule Scene Node Placement & Prefab Structure

<!-- convention-summary-start -->
### FreeOptionDirectorModule Scene Node Placement & Prefab Structure Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Scene Node Placement & Prefab Structure.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspected Scene Node Placement (Cocos Creator 2.4 Production Tree)

Inspected live from production scenes (`g9000L` / `g9666L`), `FreeOptionDirectorModule` sits on `FreeOptionPrefab` under `Canvas/Director/GameMode`:

```text
Canvas/Director/GameMode/FreeOptionPrefab [Node with Components]
├── [Component 1] BaseGameMode
├── [Component 2] FreeOptionDirectorModule (Volatility modal director)
├── [Component 3] GameLogicEventHandler
├── [Component 4] OnAddSlotModule
└── [Children Nodes]:
    ├── Gradient (cc.Sprite, cc.BlockInputEvents - Modal backdrop)
    ├── options (cc.Layout - Horizontal option cards layout)
    │   ├── option_1 (cc.Sprite, cc.Button - High volatility choice)
    │   └── option_2 (cc.Sprite, cc.Button - Low volatility choice)
    └── CountDownText (cc.Label - Auto-pick fallback timer)
```

---

## 2. Option Selection Routing

Clicking `option_1` or `option_2` triggers `FreeOptionDirectorModule.onOptionSelected(optionId)` to notify the backend and launch `FreeGamePrefab`.
