---
id: "cc_slot_module:WinAmountModule:methods:updateWinAmount"
title: "WinAmountModule.updateWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "updateWinAmount", "promise"]
---

# 📖 `WinAmountModule.updateWinAmount()`

<!-- convention-summary-start -->
### WinAmountModule.updateWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.updateWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays win tier effects and triggers rolling count-up tween, returning an awaitable Promise.

```typescript
public updateWinAmount({ winAmount, time, winLevel }: { winAmount: number; time: number; winLevel?: number }): Promise<void>
```

---

## 2. Complete Source Code Implementation

```typescript
updateWinAmount({ winAmount, time, winLevel }): Promise<void> {
    return new Promise((resolve) => {
        this.playWinEffect(winLevel);
        this._callBackOnComplete = resolve;

        if (this._tweenFade) {
            this._tweenFade.stop();
        }
        if (winAmount < this._currentValue || winAmount < this._winValue) {
            warn("Logic fail somewhere, script clear win amount have not ran yet", { current: this._currentValue, endValue: this._winValue, fastUpdateValue: winAmount });
            this.clearWinAmount();
        }
        this._winValue = winAmount;
        time = this._currentValue === winAmount ? 0 : time;
        this._tweenWinAmount({ winAmount, time });
    });
}
```
