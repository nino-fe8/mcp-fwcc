---
id: "game-implement:9666:scene:layering_and_z_index"
title: "Red Cliff (g9666) Render Layers & Z-Index Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "z_index", "rendering", "layers", "clipping"]
---

# 🎨 Red Cliff (g9666) Render Layers & Z-Index Specification

<!-- convention-summary-start -->
### Red Cliff (g9666) Render Layers & Z-Index Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Render Layers & Z-Index Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_scene_and_prefabs
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Z-Index Layering Hierarchy

```mermaid
graph TD
    L0[Layer 0: Background Spine BG_MainG] --> L1[Layer 10: Table Frame & Masks BoardG]
    L1 --> L2[Layer 20: Vertical Reels 1..6 Symbols]
    L2 --> L3[Layer 30: Top Horizontal Sub-Reel Symbols]
    L3 --> L4[Layer 40: Stacked Guan Yu Spines StackWildHolder]
    L4 --> L5[Layer 50: Winning Payline Highlights PaylineG]
    L5 --> L6[Layer 60: Flying Multipliers & Particles]
    L6 --> L7[Layer 70: HUD Panels & Wallet UIManager]
    L7 --> L8[Layer 80: Fullscreen Cutscenes CutsceneControl]
    L8 --> L9[Layer 90: Dialogs & Popups PopupControl]
    L9 --> L10[Layer 100: Toast & System Dialogs]
```
