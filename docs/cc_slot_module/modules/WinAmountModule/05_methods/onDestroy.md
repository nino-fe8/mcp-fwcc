---
id: "cc_slot_module:WinAmountModule:methods:onDestroy"
title: "WinAmountModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WinAmountModule.onDestroy()`

<!-- convention-summary-start -->
### WinAmountModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops running numeric count-up and fade-out tweens upon node destruction.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.stopTweenFade();
    this.stopTweenValue();
}
```
