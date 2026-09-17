---
id: "cc_slot_module:WinAmountModule:methods:fastUpdateWinAmount"
title: "WinAmountModule.fastUpdateWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "fastUpdateWinAmount", "fast_forward"]
---

# 📖 `WinAmountModule.fastUpdateWinAmount()`

<!-- convention-summary-start -->
### WinAmountModule.fastUpdateWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.fastUpdateWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Accelerates active numeric count-up on user touch skip.

```typescript
public fastUpdateWinAmount({ winAmount, time }: { winAmount?: number; time: number }): void
```

---

## 2. Complete Source Code Implementation

```typescript
fastUpdateWinAmount({ winAmount, time }): void {
    if (!winAmount) {
        winAmount = this._winValue;
    }
    if (winAmount < this._currentValue || winAmount < this._winValue) {
        warn("Logic fail: Could not speed up to the smaller value", { current: this._currentValue, endValue: this._winValue, fastUpdateValue: winAmount });
        return;
    }
    this._tweenWinAmount({ winAmount, time });
}
```
