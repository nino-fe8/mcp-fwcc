---
id: "game-implement:9666:trial:loop_controller_and_sdk_bypass"
title: "Red Cliff (g9666) Trial Loop Controller & SDK Tutorial Bypass"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "TrialModeLoopController9666", "sdk_bypass", "tutorial_override"]
---

# ⚙️ Red Cliff (g9666) Trial Loop Controller & SDK Tutorial Bypass

<!-- convention-summary-start -->
### Red Cliff (g9666) Trial Loop Controller & SDK Tutorial Bypass Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Trial Loop Controller & SDK Tutorial Bypass.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 09_trial_mode_and_ui_framework
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. The Challenge: SDK Rigid Tutorial Flow

The underlying Cocos Slot SDK default trial mode expects a predefined sequence of fixed tutorial steps with modal dialog popups guiding the user. Red Cliff 9666 requires a **free manual trial spin loop** where the user can press Spin freely without forced popup interruptions.

---

## 2. Solution: `TrialModeLoopController9666` Proxy Pattern

`TrialModeLoopController9666` wraps and replaces `gameLogic.playTrialMode`:

```mermaid
sequenceDiagram
    autonumber
    participant User as Player
    participant Button as TrialModeToggleButton9666
    participant Logic as GameLogic
    participant Controller as TrialModeLoopController9666
    participant SDK as Slot SDK Managers

    User->>Button: Press Trial Banner
    Button->>Logic: emit('REQUEST_PLAY_TRIAL')
    Logic->>Controller: Invokes playTrialModeProxy()
    
    Controller->>Controller: clearTutorialTrialData()
    Note over Controller,SDK: Wipes tutorialOptions & sets finishedAllOption = true
    
    Controller->>Logic: scheduler.scheduleOnce(finalizeManualTrial, 0)
    Note over Controller: Delays 1 tick to let SDK entry frame resolve safely
    
    Controller->>SDK: closeTutorialPopup() & setTutorialPopupActive(false)
    Controller->>Logic: emit('SET_ENABLE_BUTTON_BACK_TO_REAL', true)
    Controller->>Logic: emit('TRIGGER_ENABLE_USER_INTERACTION')
    Note over User: Spin button enabled - Player spins freely in Trial Mode!
```

---

## 3. Key Implementation Highlights

```typescript
private finalizeManualTrial(): void {
    if (!this.clearTutorialTrialData()) {
        cc.error("[TrialMode9666] SDK Trial managers are unavailable");
        return;
    }

    const trialModeManager = this.gameLogic.getTrialModeManager && this.gameLogic.getTrialModeManager();
    const trialModeData = trialModeManager && trialModeManager.trialModeData;

    // Suppress SDK tutorial popups while preserving error dialogs
    if (trialModeData && typeof trialModeData.setDisplayPopup === "function") {
        trialModeData.setDisplayPopup(false);
    }
    if (trialModeData && typeof trialModeData.setTutorialPopupActive === "function") {
        trialModeData.setTutorialPopupActive(false);
    }
    if (trialModeManager && typeof trialModeManager.closeTutorialPopup === "function") {
        trialModeManager.closeTutorialPopup();
    }

    const eventManager = this.gameLogic.getEventManager();
    eventManager.emit(SET_ENABLE_BACK_TO_REAL_EVENT, true);
    eventManager.emit(TRIGGER_ENABLE_USER_INTERACTION_EVENT);
}
```
