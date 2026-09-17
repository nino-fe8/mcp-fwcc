---
id: "transfer-ark:feature:jackpot_collection:06_gotchas"
title: "Jackpot Collection - Gotchas & Edge Cases"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotCollectionModule", "JackpotCollectionItem"]
tags: ["gotchas", "edge_cases", "memory_leak", "timing_bug", "wild_traps"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 6. ⚠️ Gotchas & Edge Cases

<!-- convention-summary-start -->
### Jackpot Collection - Gotchas & Edge Cases Summary

- **Core Architecture / Purpose**: Critical traps, timing desyncs, and edge cases discovered during QA and production deployments.
- **Key Mechanisms & Design**: Inactive node replay arrays, preventing prematurely cut-off cascades, and wild prefix stripping.
- **Domain Capabilities**: feature, RECIPE_004_jackpot_collection_system
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Gui/`
- **Related Docs**: [04. Reconnection](./04_reconnection_and_backward_deduction.md), [07. Setup Guide](./07_reusability_and_setup_guide.md)
<!-- convention-summary-end -->

---

## 1. The Inactive Node Spine Animation Trap
* **The Glitch**: When the player minimizes the browser tab or switches to another mobile app during a spin, Cocos Creator disables active hierarchy updates. If `updateProgress()` tries to invoke Spine's `setAnimation()` on an inactive node, Cocos will throw an assertion error or completely drop the animation.
* **The Production Fix**: Notice the defensive queue `this._pendingReplays` in `JackpotCollectionItem`:
  ```typescript
  if (!this.node.activeInHierarchy) {
      this._pendingReplays.push(() => this.playMarkEffect());
      return;
  }
  ```
  When the tab is refocused and `onEnable()` fires, it drains and replays all queued animations smoothly.

---

## 2. Premature Cutscene Trigger Before Cascade Settles
* **The Glitch**: If you emit `PLAY_CUTSCENE` immediately inside `checkCollectionComplete()`, the full-screen cutscene pops up while symbols from the winning tumble are still exploding or floating in mid-air!
* **The Production Fix**:
  1. `checkCollectionComplete()` only flags `this._hasPendingJackpotWin = true`.
  2. The cutscene is only dispatched on `CASCADE_SYMBOLS_FILLED`.
  3. Include a `delayAction(0.5)` (500ms grace period) so the grid settles cleanly before the dramatic fanfare covers the screen.

---

## 3. Wild Prefix Stripping Trap
* **The Glitch**: In many slot math models, Wild symbols carry names like `K_WILD` or `WILD_3`. If your payline counting logic uses strict string comparison (`sym === symId`), wild symbols won't be counted, causing the backward deduction on reconnection to calculate an incorrect initial state.
* **The Production Fix**: In `onJoinGameSuccess()`:
  ```typescript
  const cleanSym = String(sym).split('_')[0];
  if (cleanSym === symId || cleanSym.startsWith('K')) {
      count++;
  }
  ```
  Always clean string delimiters and accommodate Wild aliases.
