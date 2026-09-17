---
id: "cc_slot_module:WinEffectModule:methods:enter"
title: "WinEffectModule.enter Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "enter"]
---

# 📖 `WinEffectModule.enter()`

<!-- convention-summary-start -->
### WinEffectModule.enter Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.enter Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Selects between normal celebratory count-up and Turbo / Fast-To-Result fast particle burst.

```typescript
public enter(): void
```

---

## 2. Complete Source Code Implementation

```typescript
enter(): void {
    this.node.stopAllActions();

    const isTurboActive = this.gameSettings.isTurboActive;
    const isFastToResult = this.gameSettings.isFastToResult;

    const winType: string = this.content.winType;
    if (winType) {
        this._winEffectLevel = WinEffectLevelEnum[winType];
    }

    if (isTurboActive || isFastToResult) {
        this.showFastEffectWin();
    } else {
        this.showEffectWin();
    }
}
```
