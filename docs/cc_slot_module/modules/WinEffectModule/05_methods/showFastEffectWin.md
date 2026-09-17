---
id: "cc_slot_module:WinEffectModule:methods:showFastEffectWin"
title: "WinEffectModule.showFastEffectWin Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "showFastEffectWin", "turbo"]
---

# 📖 `WinEffectModule.showFastEffectWin()`

<!-- convention-summary-start -->
### WinEffectModule.showFastEffectWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.showFastEffectWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Executes 1-second fast particle burst for Turbo / Fast-To-Result modes and resolves the pipeline callback immediately.

```typescript
public showFastEffectWin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showFastEffectWin(): void {
    if (this._isShowFastEffect) {
        this.callback && this.callback();
        this.callback = null;
        return;
    }

    if (this.overlayNode) {
        this.overlayNode.active = false;
    }
    this.winInfo.active = false;
    this._isShowFastEffect = true;

    this.playSfxFastBigWin();
    this.fastParticle.stopAllActions();
    this.startParticle();
    this.callback && this.callback();
    this.callback = null;

    if (this._fastEffectAction) {
        this._fastEffectAction.stop();
        this._fastEffectAction = null;
    }
    this._fastEffectAction = tween(this.node)
        .delay(1)
        .call(() => {
            this.stopParticle();
        })
        .delay(2)
        .call(() => {
            this.exit();
        })
        .start();
}
```
