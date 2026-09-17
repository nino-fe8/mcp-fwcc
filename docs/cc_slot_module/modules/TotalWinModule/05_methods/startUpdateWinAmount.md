---
id: "cc_slot_module:TotalWinModule:methods:startUpdateWinAmount"
title: "TotalWinModule.startUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "startUpdateWinAmount"]
---

# 📖 `TotalWinModule.startUpdateWinAmount()`

<!-- convention-summary-start -->
### TotalWinModule.startUpdateWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.startUpdateWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Drives `MoneyTween.runNumber` count-up over `animDuration` ($10\text{s}$).

```typescript
public startUpdateWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
startUpdateWinAmount(): void {
    this._tweenMoney = this.moneyTween.runNumber(this._lbWinAmount.node, this.animDuration, this._totalWinAmount, {
        onComplete: () => {
            this._tweenMoney = null;
            this._skippable = false;
            this.playSoundCountingEnd();
            this.finish();
        }
    });
}
```
