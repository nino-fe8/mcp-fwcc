---
id: "cc_slot_module:PaylineInfoModule:methods:convertPayLineInfoAllWays"
title: "PaylineInfoModule.convertPayLineInfoAllWays Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "convertPayLineInfoAllWays"]
---

# 📖 `PaylineInfoModule.convertPayLineInfoAllWays()`

<!-- convention-summary-start -->
### PaylineInfoModule.convertPayLineInfoAllWays Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.convertPayLineInfoAllWays Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Formats payline toast strings for 243 / 1024 Ways to Win mechanics.

```typescript
protected convertPayLineInfoAllWays({ symbolId, payLineWinAmount, reelCount, combination }: any): any
```

---

## 2. Complete Source Code Implementation

```typescript
protected convertPayLineInfoAllWays({ symbolId, payLineWinAmount, reelCount, combination }: any): any {
    const winCombination = eno.FloatUtils.div(payLineWinAmount, combination);
    const symbolPayTableString = `${this.winText} ` + this.moneyFormatter.formatMoney(winCombination);
    const combinationString = combination > 1 ? ' x' + combination + ' = ' : '';
    const winAmount = combination > 1 ? this.moneyFormatter.formatMoney(payLineWinAmount) : '';
    const leftString = `${reelCount}`;
    const rightString = symbolPayTableString + combinationString + winAmount;

    return { leftString, rightString, symbolId };
}
```
