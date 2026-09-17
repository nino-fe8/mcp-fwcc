---
id: "cc_slot_module:WinAmountModule:methods:clearWinAmount"
title: "WinAmountModule.clearWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "clearWinAmount"]
---

# 📖 `WinAmountModule.clearWinAmount()`

<!-- convention-summary-start -->
### WinAmountModule.clearWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule.clearWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Resets label text, zeroes cached values, and stops active win frame animations.

```typescript
public clearWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clearWinAmount(): void {
    this._resetLabel();
    this.currentValue = 0;
    this._winValue = 0;
    this.stopWinEffect();
}
```
