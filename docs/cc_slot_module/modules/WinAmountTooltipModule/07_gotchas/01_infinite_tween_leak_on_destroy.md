---
id: "cc_slot_module:WinAmountTooltipModule:gotchas:01_infinite_tween_leak_on_destroy"
title: "Infinite Tween Leak on Destroy"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "gotchas", "tween_leak"]
---

# ⚠️ Infinite Tween Leak on Destroy

<!-- convention-summary-start -->
### Infinite Tween Leak on Destroy Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Infinite Tween Leak on Destroy.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Solution

Always execute `this.stopAllTweens()` in `onDestroy()`:

```typescript
stopAllTweens(): void {
    this._currentTween && this._currentTween.stop();
    this._currentTween = null;
    this._tweenFade && this._tweenFade.stop();
    this._tweenFade = null;
}
```
