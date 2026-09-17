---
id: "game-implement:9666:trial:task_list"
title: "Red Cliff (g9666) Trial Mode Subsystem Task & Debugging Checklist"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "trial_mode", "task_list", "debugging", "verification"]
---

# 📋 Red Cliff (g9666) Trial Mode Subsystem Task & Debugging Checklist

<!-- convention-summary-start -->
### Red Cliff (g9666) Trial Mode Subsystem Task & Debugging Checklist Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Trial Mode Subsystem Task & Debugging Checklist.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 09_trial_mode_and_ui_framework
- **Scope & Code Paths**: `../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/TrialModeToggleButton9666.ts#L121-L141`, `../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/TrialModeLoopController9666.ts#L93-L117`, `TrialModeLoopController9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 🎯 Purpose & Scope

This checklist outlines the comprehensive end-to-end testing, lifecycle verification, and debugging procedures for the **Trial Mode Subsystem** in Red Cliff (`g9666`), including `TrialModeToggleButton9666`, `TrialModeLoopController9666`, `TutorialMockNetwork9666`, and SDK bypass flows.

---

## 🧭 Phase 1: Mode Entry & Banner Toggle State Machine

- [ ] **Step 1.1: Verify Toggle Button Observer Bindings**
  - Verify `TrialModeToggleButton9666.onLoadExtend()` attaches observers to:
    - `_uiManagerData.isTrialModeActive`
    - `_uiManagerData.isUserInteractionEnabled`
    - `_trialModeData.isButtonTrialActive`
    - `_trialModeData.isButtonBackToRealActive`
    - `_promotionData.isActive`
  - Ensure `fireImmediately: true` synchronizes initial button sprite on scene load.

- [ ] **Step 1.2: Check Enter Trial Mode Event Dispatch**
  - Pressing the banner button in Real Mode emits `GameLogicUIEvents.REQUEST_PLAY_TRIAL`.
  - Button immediately renders `trialModeFrame` optimistically while setting `_pendingTrialMode = true`.

- [ ] **Step 1.3: Check Exit Trial Mode (Back to Real)**
  - Pressing the banner button in Trial Mode emits `GameLogicUIEvents.BACK_TO_REAL_MODE`.
  - Button renders `realModeFrame` and restores player balance.

---

## 🧭 Phase 2: Loop Controller & SDK Tutorial Bypass

- [ ] **Step 2.1: Verify `TrialModeLoopController9666` Installation**
  - In `UIManagerModule9666.onLoadExtend()`, confirm `this._trialModeLoopController.install()` replaces `gameLogic.playTrialMode` with its proxy.
  - Check that on component destruction, `destroy()` cleanly restores `originalPlayTrialMode`.

- [ ] **Step 2.2: Verify Clearing Predefined Tutorial Data**
  - Verify `clearTutorialTrialData()` wipes:
    - `gameStateManager.bindTutorialData(null)`
    - `gameStateManager.trialPS = null`
    - `trialModeManager.tutorialOptions = []`
    - `trialModeManager.finishedAllOption = true`
  - Ensure no SDK step-by-step tutorial overlay popups appear.

- [ ] **Step 2.3: Verify Next Tick Finalization**
  - Confirm `prepareManualTrial()` schedules `finalizeManualTrial()` via `scheduler.scheduleOnce(..., 0)` to allow the SDK entry frame to resolve safely before triggering user interaction.

---

## 🧭 Phase 3: Mock Network Ingestion & Sequencer

- [ ] **Step 3.1: Route Resolution via `MockRequestRoute9666`**
  - Verify spin events map correctly:
    - `client-normal-game-trial-request` $\rightarrow$ `{ source: 'tutorial', requestType: 'normal' }`
    - `client-free-game-trial-request` $\rightarrow$ `{ source: 'tutorial', requestType: 'free' }`
    - `client-respin-trial-request` $\rightarrow$ `{ source: 'tutorial', requestType: 'respin' }`

- [ ] **Step 3.2: Sequencer Deck Looping**
  - Verify `TutorialMockSequencer9666` advances steps across cascading respins and resets `caseIndex` once all mock decks complete.

---

## 🐛 Bug Troubleshooting & Diagnostic Quick-Fix Table

| Symptom | Probable Cause | Verification & Fix Location |
| :--- | :--- | :--- |
| **Trial toggle button gets permanently disabled / stuck** | `_pendingTrialMode` failed to reconcile due to unhandled cutscene lock. | Check `reconcilePendingTransition()` in [`TrialModeToggleButton9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/TrialModeToggleButton9666.ts#L121-L141). |
| **SDK tutorial prompt dialog flashes on screen** | `closeTutorialPopup()` was called before next scheduler tick. | Check `finalizeManualTrial()` in [`TrialModeLoopController9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Gui/TrialModeLoopController9666.ts#L93-L117). |
| **Spin button disabled after entering Trial Mode** | `TRIGGER_ENABLE_USER_INTERACTION` was not emitted. | Verify `eventManager.emit(TRIGGER_ENABLE_USER_INTERACTION_EVENT)` in `TrialModeLoopController9666.ts`. |
| **Real money deducted during Trial Mode** | Mock request event routing failed to intercept `client-normal-spin-request`. | Check `resolveMockRequest9666` in [`MockRequestRoute9666.ts`](../../../../assets/cc-release-slot/cc1-red-cliff/scripts/Mock/MockRequestRoute9666.ts). |
