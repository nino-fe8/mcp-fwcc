---
id: "cc_slot_module:WinEffectModule:methods:bindQuickShow"
title: "WinEffectModule.bindQuickShow Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "bindQuickShow"]
---

# 📖 `WinEffectModule.bindQuickShow()`

<!-- convention-summary-start -->
### WinEffectModule.bindQuickShow Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.bindQuickShow Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Controls `_skippable` lock duration to prevent accidental player touch skips.

```typescript
public bindQuickShow(): void
```

---

## 2. Complete Source Code Implementation

```typescript
bindQuickShow(): void {
    this._skippable = false;
    this.node.stopAllActions();
    tween(this.node)
        .delay(this.delayShowTime)
        .call(() => {
            this._skippable = true;
        })
        .delay(this.animDuration - this.delayHideTime)
        .call(() => {
            this._skippable = false;
        })
        .start();
}
```
