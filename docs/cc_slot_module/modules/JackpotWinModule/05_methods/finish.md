---
id: "cc_slot_module:JackpotWinModule:methods:finish"
title: "JackpotWinModule.finish Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "finish"]
---

# 📖 `JackpotWinModule.finish()`

<!-- convention-summary-start -->
### JackpotWinModule.finish Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.finish Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats localized money string, plays conclusion sound, and begins exit delay sequence.

```typescript
public finish(): void
```

---

## 2. Complete Source Code Implementation

```typescript
finish(): void {
    this._lbWinAmount.string = this.moneyFormatter.formatMoney(this.jackpotValue);

    this.playSoundEnd();
    this._isUpdating = false;
    this.stopParticle();
    tween(this.node)
        .delay(this.delayHideTime)
        .call(() => {
            this._lbWinAmount.string = '';
            this.exit();
        }).start();
}
```
