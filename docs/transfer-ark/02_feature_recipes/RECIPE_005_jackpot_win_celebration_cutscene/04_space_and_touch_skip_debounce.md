---
id: "transfer-ark:feature:jackpot_win_cutscene:04_skip_debounce"
title: "Jackpot Win Cutscene - Space & Touch Skip with Debounce"
category: "feature"
game_ids: ["g9666", "all"]
sdk_modules: ["JackpotWinModule"]
tags: ["input_handling", "space_skip", "touch_skip", "debounce", "anti_spam"]
created_at: "2026-09-17"
author: "ARK Slot Engineering Team"
---

# 4. ⚡ Space & Touch Skip with Debounce Protection

<!-- convention-summary-start -->
### Jackpot Win Cutscene - Space & Touch Skip Summary

- **Core Architecture / Purpose**: Input event handling architecture supporting both touch/mouse clicks and physical Spacebar keys while avoiding accidental double-skips.
- **Key Mechanisms & Design**: 
  - Anti-spam click throttle (300ms).
  - 2-stage interaction: Tap 1 = Fast forward count, Tap 2 = Dismiss cutscene.
  - 1.0s Debounce window protecting player perception after rollup completion.
  - Safe Spacebar scheduling preventing simultaneous spin trigger.
  - Active UI dialog shielding.
- **Domain Capabilities**: feature, RECIPE_005_jackpot_win_celebration_cutscene
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Cutscene/JackpotWinModule9666.ts`
- **Related Docs**: [02. State Machine & Lifecycle](./02_state_machine_and_lifecycle.md), [05. Full Implementation Code](./05_full_implementation_code.md)
<!-- convention-summary-end -->

---

## 4.1 The 2-Stage Interaction Flow

1. **Stage 1 (During `COUNTING`)**:
   - Player taps screen or presses Space $\rightarrow$ `skipCounting()` is called.
   - The tween is stopped immediately.
   - The win label jumps instantly to the target amount.
   - Counting SFX is stopped; celebration fanfare plays.
2. **Stage 2 (During `COUNTING_COMPLETED`)**:
   - Player taps screen or presses Space $\rightarrow$ calls `closePopup()`.
   - The Spine plays `out` and smoothly dismisses.

---

## 4.2 The 1.0s Debounce Safety Lock

* **Problem**: When eager players spam-click to fast-forward the rollup, the same burst of clicks often accidentally triggers dismissal before they can even read their final jackpot amount!
* **Solution**:
  ```typescript
  // Inside finishCounting():
  this._canClickToClose = false;
  if (this._tweenDebounce) this._tweenDebounce.stop();
  this._tweenDebounce = cc.tween(this.node)
      .delay(1.0)
      .call(() => {
          this._canClickToClose = true;
      })
      .start();
  ```
  During the first 1.0s after reaching the final amount, any close clicks are strictly ignored.

---

## 4.3 Safe Spacebar Handling & Spin Button Shield

* **The Double-Action Bug**: If a player releases the Spacebar (`KEY_UP`) to dismiss the Jackpot popup, the popup might close immediately, causing the underlying Main Game spin button to receive the same `KEY_UP` event and instantly launch an unintentional paid spin!
* **Production Solution**:
  ```typescript
  private onKeyUp(event: cc.Event.EventKeyboard): void {
      if (event.keyCode !== cc.macro.KEY.space || !this.canSkipFromSpace()) {
          return;
      }
      // Defer execution to the next engine microtask via scheduleOnce.
      // This keeps the cutscene blocking other Space listeners during this tick.
      this.scheduleOnce(this.skipFromSpace);
  }
  ```

* **Open Dialog Check**:
  Before allowing Space to interact with the cutscene, verify no modal dialogues (e.g. Paytable, Settings, Bet Selection) are currently covering the screen:
  ```typescript
  private canSkipFromSpace(): boolean {
      if (!this.enabledInHierarchy || this._popupState === JackpotWinState.IDLE || this._popupState === JackpotWinState.CLOSING) {
          return false;
      }
      if (!this._hasTriggeredMoneyCount) return false;
      if (this._popupState === JackpotWinState.COUNTING_COMPLETED && !this._canClickToClose) {
          return false;
      }

      const ui = (this.gameLogic?.getDataModel() as any)?.UIManagerData;
      if (ui) {
          return !(ui.isDialogMessageOpen || ui.isTrialDialogOpen || ui.isInfoOpen
              || ui.isSettingsOpen || ui.isBetSelectionPanelOpen || ui.isMenuPanelOpen
              || ui.isAutoSpinPanelOpen || ui.isPayTablePanelOpen || ui.isBuyFeaturePanelOpen);
      }
      return true;
  }
  ```
