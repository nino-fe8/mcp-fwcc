---
id: "game-implement:9666:payline:edge_cases_and_gotchas"
title: "Red Cliff (g9666) Payline & Spine Sync Edge Cases & Gotchas"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "payline", "gotchas", "edge_cases", "spine_sync"]
---

# ⚠️ Red Cliff (g9666) Payline & Spine Sync Edge Cases & Gotchas

<!-- convention-summary-start -->
### Red Cliff (g9666) Payline & Spine Sync Edge Cases & Gotchas Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Payline & Spine Sync Edge Cases & Gotchas.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 07_payline_and_spine_sync
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Gotcha: Free Game Accumulated Win Erased on Respin Step
- **Symptom**: During Free Game cascades, `lbRight` suddenly resets to 0 or only shows the latest step's win.
- **Root Cause**: `onResetNewSpin()` cleared `_lastAccumulatedWin` without guarding against Free Game mode.
- **Fix**: In `PaylineInfoModule9666.onResetNewSpin()`, return early if `this.dataStore?.currentGameMode === GAME_MODE_ENUM.FREE_GAME`.

---

## 2. Gotcha: Bone Coordinate Desync When Parent Node Moves
- **Symptom**: The multiplier label (`x8`) floats outside the designated banner slot in windowed/scaled resolutions.
- **Root Cause**: The Spine bone position `(worldX, worldY)` was applied directly without converting through `convertToNodeSpaceAR(worldPos)`.
- **Fix**: Always calculate:
```typescript
const worldPos = this.hsnCombineSpine.node.convertToWorldSpaceAR(cc.v2(bone.worldX, bone.worldY));
targetNode.setPosition(targetNode.parent.convertToNodeSpaceAR(worldPos));
```

---

## 3. Gotcha: Fast-Stop Lockup During Multiplier Application
- **Symptom**: Triggering Fast Stop while `hsnCombineSpine` is animating causes the win presentation promise to hang.
- **Fix**: Listen for `TABLE_FAST_STOP` in `onFastToResultTriggeredForApplyMulti()` and scale `hsnCombineSpine.timeScale = this.speed`.
