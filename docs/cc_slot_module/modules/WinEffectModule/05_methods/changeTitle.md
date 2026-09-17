---
id: "cc_slot_module:WinEffectModule:methods:changeTitle"
title: "WinEffectModule.changeTitle Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "changeTitle", "title_scale"]
---

# 📖 `WinEffectModule.changeTitle()`

<!-- convention-summary-start -->
### WinEffectModule.changeTitle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.changeTitle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Performs $2.0\times$ scale tween and switches title sprite frame to the new win level.

```typescript
public changeTitle(index: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
changeTitle(index): void {
    this._currentTitle = index;
    if (!this.title) {
        return;
    }

    this.playSfxChangeTitle(index);
    this.title.stopAllActions();
    tween(this.title)
        .to(0.3, { scale: 2 })
        .call(() => {
            this._sprTitle.spriteFrame = this.titleFrame[index];
        })
        .to(0.3, { scale: 1 })
        .call(() => {
            this.showTitle();
        })
        .start();
}
```
