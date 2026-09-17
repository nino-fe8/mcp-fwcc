---
id: "cc_slot_module:GameModeDirectorModule:method:showBigWin"
title: "GameModeDirectorModule._showBigWin() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showBigWin"]
---

# `GameModeDirectorModule._showBigWin(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showBigWin() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showBigWin() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async _showBigWin(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Extracts `cutsceneData` from `data`.
2. If `this.canPrepareNextSpin()` is true (Normal game idle state), runs cutscene in parallel.
3. Otherwise, sequentially blinks paylines (`await this._blinkAllPaylines()`), plays Big Win cutscene (`await this._showCutscene(data)`), and cycles paylines (`this._showAllPaylines()`).

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showBigWin(data): Promise<void> {
    const { cutsceneData } = data;
    if (this.canPrepareNextSpin()) {
        this._blinkAllPaylines().then(() => {
            this._showCutscene(data).then(() => {
                this._showAllPaylines();
                this._updateWinningAmount({ ...cutsceneData, time: 0, winLevel: 1 });
            });
        });
    } else {
        await this._blinkAllPaylines();
        await this._showCutscene(data);
        this._showAllPaylines();
        this._updateWinningAmount({ ...cutsceneData, time: 0, winLevel: 1 });
    }
    return Promise.resolve();
}
```
