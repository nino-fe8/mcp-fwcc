---
id: "cc_slot_module:GameModeDirectorModule:method:stopCurrentGameMode"
title: "GameModeDirectorModule._stopCurrentGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_stopCurrentGameMode"]
---

# `GameModeDirectorModule._stopCurrentGameMode(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._stopCurrentGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._stopCurrentGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_stopCurrentGameMode(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Resumes the wallet display.
2. Resumes Jackpot ticker.
3. Stops reels with a fallback beauty/random matrix via `this._stopSpinningTableWithRandomMatrix()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_stopCurrentGameMode(): Promise<void> {
    this.eventManager.emit(GameUIEvents.WALLET.RESUME_WALLET);
    if (this.gameSettings.isTrialMode) {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_TRIAL_JACKPOT);
    } else {
        this.eventManager.emit(GameUIEvents.JACKPOT.RESUME_JACKPOT);
    }
    return this._stopSpinningTableWithRandomMatrix();
}
```
