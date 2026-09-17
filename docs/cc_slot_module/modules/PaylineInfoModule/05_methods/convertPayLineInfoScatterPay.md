---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoScatterPay"
title: "PaylineInfoModule.convertPayLineInfoScatterPay Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoScatterPay"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoScatterPay()`

<!-- convention-summary-start -->
### PaylineInfoModule.convertPayLineInfoScatterPay Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.convertPayLineInfoScatterPay Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats payline toast strings for Scatter-pay (Pay Anywhere) slot mechanics.

```typescript
protected convertPayLineInfoScatterPay({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoScatterPay({ symbolId, payLineWinAmount, payLineWinNumbers }: any): any {
    const leftString = `${this.winText} ` + payLineWinNumbers;
    const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";

    return { leftString, rightString, symbolId };
}
```
