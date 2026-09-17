---
id: "game-implement:9666:anticipation:sure_win"
title: "Red Cliff (g9666) Sure Win Anticipation Presentation & Skeleton Overlay"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SureWinModule9666", "sure_win", "anticipation", "spine_cutscene"]
---

# 🏆 Red Cliff (g9666) Sure Win Presentation Architecture

<!-- convention-summary-start -->
### Red Cliff (g9666) Sure Win Presentation Summary

- **Core Architecture / Purpose**: Specification of the high-paying Sure Win anticipation overlay in Red Cliff (g9666).
- **Key Mechanisms & Design**: Details `SureWinModule9666.ts`, darkened board opacity tweens, Spine cutscene sequencing (`in` $\rightarrow$ `loop` $\rightarrow$ `active` $\rightarrow$ `out`), and execution resolution.
- **Domain Capabilities**: game_implement, 07_anticipation_and_near_win
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/SureWinModule9666.ts`
- **Related Docs**: [01_near_win_refill_mechanics.md](./01_near_win_refill_mechanics.md)
<!-- convention-summary-end -->

---

## 1. Feature Definition & Trigger Triggering

In Red Cliff:
- When the backend calculates that a spin contains a guaranteed mega payout or significant jackpot trigger, it returns `playSession.sureWin === 1`.
- [`NormalGameDirectorModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/NormalGameDirectorModule9666.ts) invokes:
  ```typescript
  override _playSureWinEffect(_data): Promise<void> {
      if (this.dataStore.playSession.sureWin === 1) {
          return this.eventManager.emit("SHOW_EFFECT_SURE_WIN", _data);
      }
      return Promise.resolve();
  }
  ```

---

## 2. Visual Sequence & Layering

In [`SureWinModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Gui/SureWinModule9666.ts):

1. **Board Darkening**:
   - `transparentNode` (Vertical Table overlay) and `transparentHorizontalNode` (Horizontal Table overlay) tween to `opacity: 150` in 0.5 seconds.
   - The slot grid is dimmed into shadow to spotlight the impending win.
2. **Spine Cutscene Progression**:
   - `sureWinSkeleton` activates on top of the darkened grid.
   - Plays track queue: `in` $\rightarrow$ `loop` $\rightarrow$ `active` $\rightarrow$ `out`.
   - On completion of the `active` animation track, the Promise resolves, allowing the reel spinning sequence to transition into winning payline highlights.
3. **Fade Out & Clean Up**:
   - Darkened nodes fade out smoothly to `opacity: 0`.
   - `sureWinSkeleton` deactivates to conserve GPU draw calls.
