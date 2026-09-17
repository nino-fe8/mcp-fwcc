---
id: "game-implement:9666:scene:prefab_breakdown"
title: "Red Cliff (g9666) Prefabs Breakdown & Component Bindings"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "prefabs", "MainGamePrefab", "FreeGamePrefab", "HorizontalTable"]
---

# 📦 Red Cliff (g9666) Prefabs Breakdown & Component Bindings

<!-- convention-summary-start -->
### Red Cliff (g9666) Prefabs Breakdown & Component Bindings Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Prefabs Breakdown & Component Bindings.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_scene_and_prefabs
- **Scope & Code Paths**: `MainGamePrefab.prefab`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. `MainGamePrefab.prefab` (Normal Game Table)

```text
MainGamePrefab (NormalGameTableRoot, SlotTableModule9666)
├── SubReelG (HorizontalTableModule9666, Reels 2..5 horizontal sub-reel)
│   ├── Mask (cc.Mask)
│   └── Content (HorizontalReelModule9666, 4 horizontal cells)
├── ReelG (Vertical Table Root)
│   ├── Mask (cc.Mask)
│   └── Content (SlotTableData9666, SlotReelModule9666 x 6 vertical columns)
├── StackWildHolder (StackWildModule9666, Full-height Guan Yu stacked wild spines)
└── PaylineG (SlotTablePaylineModule9666, PaylineSymbolModule9666 highlight layers)
```

---

## 2. Key Component Attachment Mapping

| Prefab Node | Attached Component | Key Script Path |
| :--- | :--- | :--- |
| `MainGamePrefab` | `SlotTableModule9666` | [SlotTableModule9666.ts](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableModule9666.ts) |
| `SubReelG` | `HorizontalTableModule9666` | [HorizontalTableModule9666.ts](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/HorizontalTableModule9666.ts) |
| `StackWildHolder` | `StackWildModule9666` | [StackWildModule.ts](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/StackWildModule.ts) |
| `NormalPaylineInfo` | `PaylineInfoModule9666` | [PaylineInfoModule9666.ts](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/PaylineInfoModule9666.ts) |
| `Jackpot` | `JackpotCollectionModule9666` | [JackpotCollectionModule9666.ts](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/JackpotCollectionModule9666.ts) |
