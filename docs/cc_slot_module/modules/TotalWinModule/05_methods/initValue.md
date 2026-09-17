---
id: "cc_slot_module:TotalWinModule:methods:initValue"
title: "TotalWinModule.initValue Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "initValue"]
---

# 📖 `TotalWinModule.initValue()`

<!-- convention-summary-start -->
### TotalWinModule.initValue Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.initValue Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Resets internal state counters, pulls aggregate win, and arms quick show lock timer.

```typescript
public initValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
initValue(): void {
    this.currentValue = 0;
    this._lbWinAmount.string = '';
    this._isUpdating = true;
    this._skippable = false;
    this._hasSkip = false;
    this._totalWinAmount = this.getTotalWinAmount();
    this.bindQuickShow();
}
```
