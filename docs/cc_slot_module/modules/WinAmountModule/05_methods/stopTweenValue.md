---
id: "cc_slot_module:WinAmountModule:methods:stopTweenValue"
title: "WinAmountModule.stopTweenValue Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "stopTweenValue"]
---

# 📖 `WinAmountModule.stopTweenValue()`

<!-- convention-summary-start -->
### WinAmountModule.stopTweenValue Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.stopTweenValue Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops active numeric count-up tween handle and clears reference.

```typescript
public stopTweenValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopTweenValue(): void {
    this._tweenValue && this._tweenValue.stop();
    this._tweenValue = null;
}
```
