---
id: "game-implement:9666:scene:node_trees"
title: "Red Cliff (g9666) Complete Scene Node Trees Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "scene_tree", "g9666L", "g9666", "g9666H", "node_hierarchy"]
---

# 🌲 Red Cliff (g9666) Complete Scene Node Trees

<!-- convention-summary-start -->
### Red Cliff (g9666) Complete Scene Node Trees Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Complete Scene Node Trees Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 02_scene_and_prefabs
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Main Game Scene: `g9666L.fire` (1920x1080 Landscape)

```text
Canvas (cc.Canvas, cc.Widget)
├── Main Camera (cc.Camera)
└── Director (NormalGameDirectorModule9666, FreeGameDirectorModule9666)
    ├── GameMode (GameModeManager)
    │   ├── BG_MainG (sp.Skeleton: Spine Background Normal / Free Game)
    │   ├── BoardG (cc.Sprite: Main metal table border)
    │   ├── MainGamePrefab (Normal Mode Table Root)
    │   ├── FreeGamePrefab (Free Spins Table Root)
    │   └── FreeOptionPrefab (Free Spins Option Selection Popup)
    ├── UIManager (UIManagerModule9666)
    │   ├── SettingButton (Open settings popup)
    │   ├── InfoButton (Open paytable info)
    │   ├── Bet (Bet selector: - / + Bet Size, Bet Level, Total Bet)
    │   ├── Jackpot (4-Tier Jackpot HUD: Grand, Major, Minor, Mini)
    │   ├── Wallet (Balance & Win Amount displays)
    │   ├── FreeSpinButton & NormalSpinButton (Spin buttons with hold-to-auto)
    │   ├── TurboButton (Turbo / Fast-to-Result toggle)
    │   ├── ScatterCollectPrefab (6 Warship Scatter Collection flags)
    │   └── NormalPaylineInfo (Win summary panel & Spine Bone Tracker)
    ├── CutsceneControl (CutsceneControllerModule)
    │   ├── IntroFreeGame (Spine IntroFG)
    │   ├── JackpotWin (Spine JackpotWin)
    │   ├── TotalWin (Spine TotalWin)
    │   └── WinEffect (Spine BigWin / MegaWin / SuperWin)
    └── PopupControl (PopupControllerModule)
        ├── TutorialPopup
        ├── SettingPanel
        ├── BetHistory
        └── InfoPanel
```
