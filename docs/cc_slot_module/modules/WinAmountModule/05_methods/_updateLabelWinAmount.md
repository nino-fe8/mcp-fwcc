---
id: "cc_slot_module:WinAmountModule:methods:updateLabelWinAmount"
title: "WinAmountModule._updateLabelWinAmount Method"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "methods", "_updateLabelWinAmount"]
---

# 📖 `WinAmountModule._updateLabelWinAmount()`

<!-- convention-summary-start -->
### WinAmountModule._updateLabelWinAmount Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule._updateLabelWinAmount Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats the current numeric value with `moneyFormatter.formatMoney()` and updates `labelWinAmount.string`.

```typescript
private _updateLabelWinAmount(): void
```

---

## 2. Complete Source Code Implementation

```typescript
_updateLabelWinAmount(): void {
    this.labelWinAmount.string = this.currentValue && this.currentValue > 0 ? this.moneyFormatter.formatMoney(this.currentValue) : "";
}
```
