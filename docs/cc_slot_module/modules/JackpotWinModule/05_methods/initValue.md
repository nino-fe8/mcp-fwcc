---
id: "cc_slot_module:JackpotWinModule:methods:initValue"
title: "JackpotWinModule.initValue Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "initValue"]
---

# 📖 `JackpotWinModule.initValue()`

<!-- convention-summary-start -->
### JackpotWinModule.initValue Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.initValue Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Unpacks jackpot tier name and value from payload and arms quick show lock timer.

```typescript
public initValue(): void
```

---

## 2. Complete Source Code Implementation

```typescript
initValue(): void {
    this.jackpotType = this.content.jackpotType || "GRAND";
    this.jackpotValue = this.content.jackpotValue || 0;
    this.currentValue = 0;
    this._lbWinAmount.string = '';
    this._isUpdating = true;
    this._skippable = false;
    this._hasClicked = false;
    this.bindQuickShow();
}
```
