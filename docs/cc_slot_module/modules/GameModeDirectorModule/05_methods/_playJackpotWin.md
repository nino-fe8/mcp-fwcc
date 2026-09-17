---
id: "cc_slot_module:GameModeDirectorModule:method:_playJackpotWin"
title: "GameModeDirectorModule._playJackpotWin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_playJackpotWin", "Jackpot", "cutscene"]
---

# `GameModeDirectorModule._playJackpotWin(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._playJackpotWin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._playJackpotWin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public _playJackpotWin(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `if (this.dataStore.playSession.jackpot)`:
2. Packages jackpot payload: `{ cutsceneType: CUTSCENE_TYPE_ENUM.JACKPOT_WIN, cutsceneData: this.dataStore.getJackpotInfo() }`.
3. Calls and awaits `this._showJackpotPayLine(data)` (blinks the winning 5-of-a-kind jackpot symbols).
4. Calls and awaits `this._showUnskippedCutscene(data)` (forces player to view grand jackpot celebration dialogue without skip).
5. Calls and awaits `this._resumeJackpot(true)` (resumes jackpot ticker counting).
6. Returns `Promise.resolve()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _playJackpotWin(): Promise<void> {
    if (this.dataStore.playSession.jackpot) {
        const data = { cutsceneType: CUTSCENE_TYPE_ENUM.JACKPOT_WIN, cutsceneData: this.dataStore.getJackpotInfo() };
        await this._showJackpotPayLine(data);
        await this._showUnskippedCutscene(data);
        await this._resumeJackpot(true);
    }
    return Promise.resolve();
}
```
