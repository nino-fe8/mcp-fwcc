---
id: "cc_slot_module:FreeGameDirectorModule:method:showWinPayline"
title: "FreeGameDirectorModule._showWinPayline() Method Specification"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "method", "_showWinPayline", "cumulative_win"]
---

# `FreeGameDirectorModule._showWinPayline(data: any): Promise<void>`

<!-- convention-summary-start -->
### FreeGameDirectorModule._showWinPayline() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule._showWinPayline() Method Specification.
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
2. Reads `winAmount` and `winAmountPS` from `this.dataStore.playSession`.
3. Sets cumulative total: `const win = winAmountPS || winAmount; data.winAmount = win;`.
4. Updates win label via `this._updateWinningAmount(data)`.
5. Emits `BLINK_ALL_PAYLINES`, followed by `SHOW_ALL_PAYLINES`.
6. Awaits `this.delayAction(delayTime)` to allow players to appreciate the winning paylines.

---

## 3. Un-truncated Source Code Implementation
```typescript
async _showWinPayline(data): Promise<void> {
    const { delayTime } = data;
    const { winAmount, winAmountPS } = this.dataStore.playSession;

    const win = winAmountPS || winAmount;
    data.winAmount = win;

    this._updateWinningAmount(data);
    this.moduleEvent.emit("BLINK_ALL_PAYLINES", data).then(() => {
        this.moduleEvent.emit("SHOW_ALL_PAYLINES", data);
    });
    await this.delayAction(delayTime);

    return Promise.resolve();
}
```
