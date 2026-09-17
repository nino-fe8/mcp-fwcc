---
id: "cc_slot_module:WinAmountModule:methods:stopTweenFade"
title: "WinAmountModule.stopTweenFade Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "stopTweenFade"]
---

# 📖 `WinAmountModule.stopTweenFade()`

<!-- convention-summary-start -->
### WinAmountModule.stopTweenFade Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.stopTweenFade Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops active fade-out tween handle and clears reference.

```typescript
public stopTweenFade(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopTweenFade(): void {
    this._tweenFade && this._tweenFade.stop();
    this._tweenFade = null;
}
```
