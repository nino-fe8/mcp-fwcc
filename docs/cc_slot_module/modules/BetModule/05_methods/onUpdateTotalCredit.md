---
id: "cc_slot_module:BetModule:methods:onUpdateTotalCredit"
title: "BetModule.onUpdateTotalCredit Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "onUpdateTotalCredit"]
---

# 📖 `BetModule.onUpdateTotalCredit()`

<!-- convention-summary-start -->
### BetModule.onUpdateTotalCredit Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.onUpdateTotalCredit Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Appends localized credit text suffix to the total credit balance and updates `totalCreditLabel`.

```typescript
public onUpdateTotalCredit(totalCredit: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onUpdateTotalCredit(totalCredit: number): void {
    if (this.totalCreditLabel && totalCredit) {
        this.totalCreditLabel.string = `${totalCredit}` + this.getCreditText();
    }
}
```
