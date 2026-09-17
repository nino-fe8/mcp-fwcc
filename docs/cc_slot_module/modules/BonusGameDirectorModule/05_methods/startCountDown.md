---
id: "cc_slot_module:BonusGameDirectorModule:method:startCountDown"
title: "BonusGameDirectorModule.startCountDown() Method Specification"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "method", "startCountDown", "tween", "auto_pick"]
---

# `BonusGameDirectorModule.startCountDown(): void`

<!-- convention-summary-start -->
### BonusGameDirectorModule.startCountDown() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule.startCountDown() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public startCountDown(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Checks `if (!this.labelCountDown) return;`.
2. Stops any existing tween via `this.stopCountDown()`.
3. Instantiates repeating tween:
   * Waits `1s` delay.
   * Decrements `this.countdownTime--`.
   * Updates display: `this.updateCountdownText(this.countdownTime)`.
   * If `this.countdownTime <= 0`: stops timer and invokes `this._runAutoTrigger()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
startCountDown(): void {
    if (!this.labelCountDown) {
        return;
    }
    this.stopCountDown();
    this._repeatCountDown = tween(this)
        .delay(1)
        .call(() => {
            this.countdownTime--;
            this.updateCountdownText(this.countdownTime);
            if (this.countdownTime <= 0) {
                this._repeatCountDown.stop();
                this._repeatCountDown = null;
                this._runAutoTrigger();
            }
        })
        .union()
        .repeatForever()
        .start();
}
```
