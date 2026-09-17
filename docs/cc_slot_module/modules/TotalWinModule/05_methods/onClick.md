---
id: "cc_slot_module:TotalWinModule:methods:onClick"
title: "TotalWinModule.onClick Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "onClick"]
---

# 📖 `TotalWinModule.onClick()`

<!-- convention-summary-start -->
### TotalWinModule.onClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.onClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Player tap handler that aborts the 10s tween and launches an accelerated 1s count to conclusion.

```typescript
public onClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClick(): void {
    if (!this._isUpdating || !this._skippable || this._hasSkip) {
        return;
    }
    this._hasSkip = true;

    this.playSoundSkip();

    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }

    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, 1, this._totalWinAmount, {
        onComplete: () => {
            this._tweenMoney = null;
            this.finish();
        }
    });
}
```
