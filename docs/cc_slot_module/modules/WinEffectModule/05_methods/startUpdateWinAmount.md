---
id: "cc_slot_module:WinEffectModule:methods:startUpdateWinAmount"
title: "WinEffectModule.startUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "startUpdateWinAmount", "money_tween"]
---

# 📖 `WinEffectModule.startUpdateWinAmount()`

<!-- convention-summary-start -->
### WinEffectModule.startUpdateWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.startUpdateWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Drives `MoneyTween.runBigWinNumber` rolling count-up over `animDuration`.

```typescript
public startUpdateWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
startUpdateWinAmount(): void {
    const winAmount = this.content.winAmount;
    this.playSoundCounting();
    this._tweenMoney = this.moneyTween.runBigWinNumber(this._lbWinAmount.node, this.animDuration, winAmount, { onUpdate: ({ value }: { value: number }) => {
        this.currentValue = value;
    }, onComplete: () => {
        this.currentValue = winAmount;
        this.playSoundCountingEnd();
        this._tweenMoney = null;
        this.finish();
    }});
}
```
