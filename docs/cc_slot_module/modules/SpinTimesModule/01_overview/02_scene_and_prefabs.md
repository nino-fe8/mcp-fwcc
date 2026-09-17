---
id: "cc_slot_module:SpinTimesModule:overview:scene_and_prefabs"
title: "SpinTimesModule Scene Node Hierarchy & Prefab Specifications"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "overview", "scene_prefabs", "hierarchy", "hud"]
---

# 🏛️ SpinTimesModule Scene Node Hierarchy & Prefab Specifications

<!-- convention-summary-start -->
### SpinTimesModule Scene Node Hierarchy & Prefab Specifications Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Scene Node Hierarchy & Prefab Specifications.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/GUI/SpinTimes/NormalSpinTimes.prefab`, `assets/cc-common/cc-slot-module/GUI/SpinTimes/FreeSpinTimes.prefab`, `assets/cc-common/cc-slot-module/GUI/Promotion/PromotionSpinTimes.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Live Inspected Scene Hierarchy Structure

Inspected directly from the active canonical scene (`g9000L.fire` / `g9666L.fire`) via `cocos24-mcp-server`:

```text
Canvas
└── Director [Components: GameConfig, GameDataStore, GameInit, GameDirector]
    └── UIManager [Component: UIManagerModule]
        ├── NormalSpinTimes [Component: SpinTimesModule] (Active during auto spin)
        │   └── Label [Component: cc.Label] (Remaining auto-spin counter text)
        ├── FreeSpinTimes [Component: SpinTimesModule] (Active during Free Spins)
        │   └── Label [Component: cc.Label] (Remaining free spin counter text)
        └── PromotionSpinTimes [Component: SlotPromotionSpinTimes]
            └── Label [Component: cc.Label] (Campaign/bonus round counter)
```

---

## 2. Referenced Prefabs & Asset Inventory

| Name | Asset UUID | Asset Path | Purpose |
| :--- | :--- | :--- | :--- |
| `NormalSpinTimes` | `c0cea6d5-c1ad-4615-9566-29f997039668` | `assets/cc-common/cc-slot-module/GUI/SpinTimes/NormalSpinTimes.prefab` | Normal mode auto-spin remaining count badge container. |
| `FreeSpinTimes` | `34604e13-89f9-4f3d-bf9c-ce326cbcd9b8` | `assets/cc-common/cc-slot-module/GUI/SpinTimes/FreeSpinTimes.prefab` | Free spins feature remaining spins badge container. |
| `PromotionSpinTimes` | `7fc94d7f-ed52-43db-bc04-92ac68fd113f` | `assets/cc-common/cc-slot-module/GUI/Promotion/PromotionSpinTimes.prefab` | Campaign promotion spin counter badge container. |

---

## 3. Companion Subsystems & Node Bindings

1. **`GameModeDirectorModule`**: Emits `UPDATE_SPINTIMES` and `RESET_SPINTIMES` to update remaining counter labels.
2. **`SlotButtonModule`**: Sits co-located above spin buttons to show remaining spins count overlay.
