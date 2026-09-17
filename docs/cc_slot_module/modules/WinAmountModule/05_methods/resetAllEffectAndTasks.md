---
id: "cc_slot_module:WinAmountModule:methods:resetAllEffectAndTasks"
title: "WinAmountModule.resetAllEffectAndTasks Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "resetAllEffectAndTasks"]
---

# 📖 `WinAmountModule.resetAllEffectAndTasks()`

<!-- convention-summary-start -->
### WinAmountModule.resetAllEffectAndTasks Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.resetAllEffectAndTasks Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Protected cleanup routine invoked during scene or round resets.

```typescript
protected resetAllEffectAndTasks(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected resetAllEffectAndTasks(): void {
    this.clearWinAmount();
}
```
