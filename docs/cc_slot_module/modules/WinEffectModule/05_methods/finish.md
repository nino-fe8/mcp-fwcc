---
id: "cc_slot_module:WinEffectModule:methods:finish"
title: "WinEffectModule.finish Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `WinEffectModule.finish()`

<!-- convention-summary-start -->
### WinEffectModule.finish Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.finish Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats final amount, plays victory end sound, and starts exit delay tween.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this.playSoundEnd();
    this._skippable = false;
    this._isUpdating = false;
    this.currentValue = this.content.winAmount;
    this.updateCurrentTitle();
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.content.winAmount);

    this.winAmount.stopAllActions();
    this.stopParticle();

    if (this._tweenFinish) {
        this._tweenFinish.stop();
        this._tweenFinish = null;
    }

    this._tweenFinish = tween(this.node)
        .delay(this.delayHideTime)
        .call(() => {
            this.exit();
        })
        .start();
}
```
