---
id: "cc_slot_module:GameModeDirectorModule:method:showWinPayline"
title: "GameModeDirectorModule._showWinPayline() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showWinPayline"]
---

# `GameModeDirectorModule._showWinPayline(data: any): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showWinPayline() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showWinPayline() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
async _showWinPayline(data: any): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Extracts `delayTime` from `data`.
2. Updates win amount label via `this._updateWinningAmount(data)`.
3. Blinks all paylines via `this._blinkAllPaylines()`, then triggers cycling win lines via `this._showAllPaylines()`.
4. If next spin cannot be prepared (`!this.canPrepareNextSpin()`), waits for `delayTime` via `this.delayAction(delayTime)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showWinPayline(data): Promise<void> {
    const { delayTime } = data;
    this._updateWinningAmount(data);
    this._blinkAllPaylines().then(() => {
        this._showAllPaylines();
    });
    if (!this.canPrepareNextSpin()) {
        await this.delayAction(delayTime);
    }
    return Promise.resolve();
}
```
