---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoLine"
title: "PaylineInfoModule.convertPayLineInfoLine Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoLine"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoLine()`

<!-- convention-summary-start -->
### PaylineInfoModule.convertPayLineInfoLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.convertPayLineInfoLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats payline toast strings for Line-based slot mechanics.

```typescript
protected convertPayLineInfoLine({ payLineID, payLineWinNumbers, payLineWinAmount, symbolId }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoLine({ payLineID, payLineWinNumbers, payLineWinAmount, symbolId }: any): any {
    const leftString = `${this.lineText} ${payLineID} ${this.winText} ` + payLineWinNumbers + " x";
    const rightString = "= " + this.moneyFormatter.formatMoney(payLineWinAmount) + "";
    return { leftString, rightString, symbolId };
}
```
