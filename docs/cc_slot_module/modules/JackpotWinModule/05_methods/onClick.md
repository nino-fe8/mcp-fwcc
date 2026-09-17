---
id: "cc_slot_module:JackpotWinModule:methods:onClick"
title: "JackpotWinModule.onClick Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "onClick"]
---

# 📖 `JackpotWinModule.onClick()`

<!-- convention-summary-start -->
### JackpotWinModule.onClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.onClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Player tap handler that cancels the 10s tween and launches an accelerated 1s tween to count up to the final total.

```typescript
public onClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClick(): void {
    if (!this._isUpdating) {
        return;
    }
    if (!this._skippable) {
        return;
    }
    if (!this._hasClicked) {
        this._hasClicked = true;
    } else {
        return;
    }
    
    this.playSoundSkip();

    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }

    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this.jackpotValue, {
        onComplete: () => {
            this.playSoundCountingEnd();
            this.finish();
        }
    });
}
```
