---
id: "cc_slot_module:WinAmountModule:methods:fadeOutNumber"
title: "WinAmountModule.fadeOutNumber Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "fadeOutNumber"]
---

# 📖 `WinAmountModule.fadeOutNumber()`

<!-- convention-summary-start -->
### WinAmountModule.fadeOutNumber Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.fadeOutNumber Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Fades out the win label opacity smoothly over time and clears value upon fade completion.

```typescript
public fadeOutNumber(time: number = 0.5): void
```

---

## 2. Complete Source Code Implementation

```typescript
fadeOutNumber(time: number = 0.5): void {
    if (!this.labelWinAmount || this._winValue <= 0) {
        return;
    }
    (this.node as any).isFading = true;
    if (this._tweenValue) {
        this.currentValue = this._winValue;
    }
    this.stopTweenValue();
    this.resetCallBack();
    this._tweenFade = fadeOut(this.labelWinAmount.node, time, {
        onComplete: () => {
            (this.node as any).isFading = false;
            this.clearWinAmount();
        },
    });
}
```
