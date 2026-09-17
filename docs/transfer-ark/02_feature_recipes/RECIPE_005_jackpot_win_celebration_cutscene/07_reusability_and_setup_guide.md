---
id: "transfer-ark:feature:jackpot_win_cutscene:07_reusability"
title: "Jackpot Win Cutscene - Reusability & Setup Guide"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule", "CutsceneController"]
tags: ["setup_guide", "prefab_hierarchy", "inspector", "cutscene_control", "porting_checklist"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 7. ♻️ Reusability & Setup Guide for New Games

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Reusability & Setup Guide Summary

- **Core Architecture / Purpose**: Step-by-step developer setup guide for assembling the `JackpotWin.prefab` and linking it to the cutscene controller.
- **Key Mechanisms & Design**: Exact node hierarchy, Spine bone naming contracts for the art team, and CutsceneController registration.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/<game_id>/data/prefabs/Cutscene/`
- **Related Docs**: [05. Full Implementation Code](./05_full_implementation_code.md), [INDEX.md](./INDEX.md)
<!-- convention-summary-end -->

---

## 7.1 Prefab Hierarchy Setup (`JackpotWin.prefab`)

**Path**: `assets/cc-release-slot/<game_id>/data/prefabs/Cutscene/JackpotWin.prefab`

```text
JackpotWin (Node with JackpotWinModule[GameId] script)
├── overlay (cc.Node with cc.Sprite - semi-transparent black shield, e.g. opacity 180)
├── jackpotCollectSpine (cc.Node with sp.Skeleton - parade animation "idle_symbol_X")
│   ├── symbol_icon_1 (cc.Node with sp.Skeleton - follows bone "slot_symbol_1")
│   ├── symbol_icon_2 (cc.Node with sp.Skeleton - follows bone "slot_symbol_2")
│   ├── symbol_icon_3 (cc.Node with sp.Skeleton - follows bone "slot_symbol_3")
│   ├── symbol_icon_4 (cc.Node with sp.Skeleton - follows bone "slot_symbol_4")
│   ├── symbol_icon_5 (cc.Node with sp.Skeleton - follows bone "slot_symbol_5")
│   └── symbol_icon_6 (cc.Node with sp.Skeleton - follows bone "slot_symbol_6")
├── jackpotSpine (cc.Node with sp.Skeleton - main banner spine: "in", "loop", "out")
└── winAmount (cc.Node with cc.Label - floating win number label, follows "slot_coin")
```

---

## 7.2 Spine Art Asset Contracts

Deliver this exact specification to your 2D Spine Animators:

### For `jackpotSpine`:
1. **Bone Name**: Must contain bone **`slot_coin`** located at the exact visual center of the golden banner/ribbon.
2. **Event Frames**:
   - Must emit user event **`money_count`** on the exact frame the chest opens or banner lands.
   - Must emit user event **`money_out`** on the frame the banner starts folding away in the `out` animation.
3. **Animations**:
   - `in`: Dramatic entry (plays once).
   - `loop`: Idle floating/sparkling (loops indefinitely).
   - `out`: Exit folding/bursting (plays once).

### For `jackpotCollectSpine`:
1. **Bone Names**: Must contain bones **`slot_symbol_1`**, **`slot_symbol_2`**, ..., **`slot_symbol_6`**.
2. **Animations**: `idle_symbol_3`, `idle_symbol_4`, `idle_symbol_5`, `idle_symbol_6`.

---

## 7.3 Inspector Property Configuration

In Cocos Creator Inspector for `JackpotWinModule`:
- **`jackpotSpine`**: Drag `jackpotSpine` node.
- **`jackpotCollectSpine`**: Drag `jackpotCollectSpine` node.
- **`symbolIconSkeletons`**: Array of 6 `sp.Skeleton` nodes (`symbol_icon_1` to `symbol_icon_6`).
- **`symbolIconMappings`**: Add entries mapping symbol codes (e.g. `"3"`, `"4"`, `"5"`) to their corresponding `sp.SkeletonData`.
- **`winAmount`**: Drag `winAmount` node.
- **`boneCoinName`**: `"slot_coin"`.
- **`moneyOffset`**: `Vec2(0, 10)`.
- **Audio IDs**:
  - `sfxCountingId`: `"COUNTING"`
  - `sfxCountingStopId`: `"COUNTING_STOP"`
  - `sfxJackpotEndId`: `"JACKPOT_END"`
  - `bgmJackpotId`: `"BGM_JACKPOT"`
  - `bgmFreeGameId`: `"BGM_FREE"`

---

## 7.4 CutsceneController Registration

In `assets/cc-release-slot/<game_id>/data/prefabs/Cutscene/CutsceneControl.prefab`:
1. Select the `CutsceneController` node.
2. In `cutsceneList`, add a new entry.
3. Link the instantiated `JackpotWin` node from your scene/prefab hierarchy.
4. Set `cutsceneType = CUTSCENE_TYPE_ENUM.JACKPOT_WIN` (enum index `1` or matching game config).

---

## 7.5 Verification & QA Checklist

- [ ] **Collect Parade**: Trigger Jackpot with 4 symbols. Confirm `idle_symbol_4` plays and 4 symbols align cleanly on their bones.
- [ ] **Event `money_count`**: Confirm money label only appears and begins counting when `money_count` fires.
- [ ] **Bone Tracking**: Confirm label smoothly follows the floating coin graphic during `loop`.
- [ ] **Touch Skip Step 1**: Tap during rollup $\rightarrow$ text jumps to final jackpot value; counting audio stops; fanfare plays.
- [ ] **1.0s Debounce**: Tap immediately after skip $\rightarrow$ verify popup does NOT close within the first second.
- [ ] **Touch Skip Step 2**: Tap after 1.0s $\rightarrow$ Spine plays `out`, label hides on `money_out`, popup exits.
- [ ] **3.0s Auto-Close**: If untouched after count ends, popup automatically closes after 3.0s.
- [ ] **Spacebar Spin Safety**: Spam Spacebar while closing $\rightarrow$ verify underlying reels DO NOT start a new paid spin.
- [ ] **BGM Cross-Fade**: If won in Free Game, confirm music returns cleanly to `BGM_FREE` upon cutscene exit.
