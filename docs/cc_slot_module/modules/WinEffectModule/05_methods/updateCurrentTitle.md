---
id: "cc_slot_module:WinEffectModule:methods:updateCurrentTitle"
title: "WinEffectModule.updateCurrentTitle Method"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "methods", "updateCurrentTitle"]
---

# 📖 `WinEffectModule.updateCurrentTitle()`

<!-- convention-summary-start -->
### WinEffectModule.updateCurrentTitle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule.updateCurrentTitle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Monitors active numeric rolling total and promotes title to MEGA or SUPER win tiers.

```typescript
public updateCurrentTitle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateCurrentTitle(): void {
    if (this.currentValue >= this._superWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.SUPER) {
            this.changeTitle(WinEffectLevelEnum.SUPER);
        }
    } else if (this.currentValue >= this._megaWinAmount) {
        if (this._currentTitle !== WinEffectLevelEnum.MEGA) {
            this.changeTitle(WinEffectLevelEnum.MEGA);
        }
    }
}
```
