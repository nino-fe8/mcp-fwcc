---
id: "transfer-ark:feature:jackpot_win_cutscene:06_gotchas_audio"
title: "Jackpot Win Cutscene - Gotchas & Audio Cross-Fade"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule"]
tags: ["gotchas", "audio_fade", "cross_fade", "edge_cases", "timing_bug"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 6. ⚠️ Gotchas & Audio Cross-Fade Architecture

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Gotchas & Audio Cross-Fade Summary

- **Core Architecture / Purpose**: Critical traps, Spine lifecycle caveats, and acoustic fade routines for the Jackpot Win Celebration cutscene.
- **Key Mechanisms & Design**: Solving the Spacebar trigger bleed, first-frame world transform calculation, and mode-aware BGM restoration.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/JackpotWinModule9666.ts`
- **Related Docs**: [04. Skip & Debounce](./04_space_and_touch_skip_debounce.md), [07. Setup Guide](./07_reusability_and_setup_guide.md)
<!-- convention-summary-end -->

---

## 1. Spacebar Trigger Bleed Bug
* **The Glitch**: The player hits Space to skip the rollup. If the cutscene dismisses synchronously inside the `KEY_UP` event, Cocos event dispatcher bubbles the same key event down to `NormalGameDirectorModule` / `SlotSpinButton`, immediately spending player balance on an unwanted new spin!
* **The Production Fix**: Wrap dismissal in `this.scheduleOnce(this.skipFromSpace)`. This defers the closing action by one frame, allowing all active keyboard dispatchers to finish before the underlying spin button becomes interactable.

---

## 2. World Transform First-Frame Lag
* **The Glitch**: Calling `findBone("slot_coin")` right after `jackpotSpine.setAnimation(0, 'in')` returns uninitialized bone coordinates `(0, 0)`, causing `winAmount` to visibly flash at the bottom-left corner of the screen for 1 frame before jumping to the chest.
* **The Production Fix**: Always execute:
  ```typescript
  this.jackpotSpine.updateWorldTransform();
  ```
  Immediately prior to querying bone coordinates or activating `winAmount`.

---

## 3. Mode-Aware BGM Cross-Fade
* **The Problem**: If Jackpot was won during Free Spins, blindly calling `fadeToMainBGM()` switches the background track back to Base Game music while the player is still in the middle of Free Spins!
* **The Production Fix**: Check `this.dataStore.currentGameMode`:
  ```typescript
  resumeMainBGM(fadeTime: number = this.bgmResumeFadeTime): void {
      const currentMode = this.dataStore.currentGameMode;
      const inFreeGame = currentMode === GAME_MODE_ENUM.FREE_GAME
          || currentMode === (GAME_MODE_ENUM as any).FREE_OPTION_GAME;

      if (inFreeGame) {
          switchMusicWithFade(this.soundPlayer, this.bgmFreeGameId, true, fadeTime);
          return;
      }
      fadeToMainBGM(this.soundPlayer, fadeTime);
  }
  ```

---

## 4. Spine Animation Mix Configuration
* **The Requirement**: Without animation cross-mixing, transitions between `in` $\rightarrow$ `loop` $\rightarrow$ `out` will abruptly snap character meshes.
* **The Production Fix**: In `onLoadExtend()`:
  ```typescript
  this.jackpotSpine.setMix('in', 'loop', 0.2);
  this.jackpotSpine.setMix('loop', 'out', 0.2);
  this.jackpotSpine.setMix('in', 'out', 0.2);
  ```
  This guarantees buttery-smooth 200ms blending between all key states.
