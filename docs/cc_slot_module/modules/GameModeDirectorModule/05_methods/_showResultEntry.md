---
id: "cc_slot_module:GameModeDirectorModule:method:_showResultEntry"
title: "GameModeDirectorModule._showResultEntry() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showResultEntry", "BigWin", "Paylines"]
---

# `GameModeDirectorModule._showResultEntry(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showResultEntry() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showResultEntry() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public _showResultEntry(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `const hasBigWin = this.dataStore.isBigWin()`.
2. If `hasBigWin === true`:
   - Builds cutscene descriptor: `{ cutsceneData: this.dataStore.getBigWinData(), cutsceneType: CUTSCENE_TYPE_ENUM.BIG_WIN }`.
   - Calls and awaits `this._handleBigWin(data)`.
3. Else if `this.dataStore.playSession.payLines` exists:
   - Calls and awaits `this._showWinPayline(this.dataStore.getWinAmountInfo())`.
4. Returns `Promise.resolve()` if no paylines were won.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showResultEntry(): Promise<void> {
    const hasBigWin = this.dataStore.isBigWin();
    if (hasBigWin) {
        const data = { cutsceneData: this.dataStore.getBigWinData(), cutsceneType: CUTSCENE_TYPE_ENUM.BIG_WIN };
        return this._handleBigWin(data);
    }
    if (this.dataStore.playSession.payLines) {
        return this._showWinPayline(this.dataStore.getWinAmountInfo());
    }
    return Promise.resolve();
}
```
