---
id: "cc_slot_module:WinEffectModule:methods:showEffectWin"
title: "WinEffectModule.showEffectWin Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "showEffectWin"]
---

# 📖 `WinEffectModule.showEffectWin()`

<!-- convention-summary-start -->
### WinEffectModule.showEffectWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.showEffectWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes normal celebratory modal presentation, pulsing label tweens, coin particles, and begins number count-up.

```typescript
public showEffectWin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showEffectWin(): void {
    this._isShowNormalEffect = true;
    this.winInfo.active = true;
    if (this.overlayNode) {
        this.overlayNode.active = true;
    }

    this.playSoundStart();
    this.showWinAmount();
    this.showTitle();

    this.initValue();
    this.startParticle();
    this.startUpdateWinAmount();
}
```
