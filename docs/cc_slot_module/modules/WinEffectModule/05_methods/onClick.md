---
id: "cc_slot_module:WinEffectModule:methods:onClick"
title: "WinEffectModule.onClick Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "onClick", "skip"]
---

# 📖 `WinEffectModule.onClick()`

<!-- convention-summary-start -->
### WinEffectModule.onClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.onClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Player screen tap handler that fast-forwards rolling money counts to final totals.

```typescript
public onClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onClick(): void {
    if (!this._isUpdating || this._speedUp) {
        return;
    }
    if (!this._skippable) {
        return;
    }
    this.playSoundSkip();

    this._speedUp = true;
    this._skippable = false;
    this.winAmount.stopAllActions();
    this.node.stopAllActions();

    if (this._tweenMoney) {
        this._tweenMoney.stop();
        this._tweenMoney = null;
    }

    this.playSoundCountingEnd();
    this.currentValue = this.content.winAmount;
    this.finish();
}
```
