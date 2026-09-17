---
id: "cc_slot_module:PaylineSymbolModule:method:getWinSymbolsInPayLine"
title: "PaylineSymbolModule.getWinSymbolsInPayLine Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "getWinSymbolsInPayLine"]
---

# 🚀 `PaylineSymbolModule.getWinSymbolsInPayLine(payLine): cc.Node[]`

<!-- convention-summary-start -->
### PaylineSymbolModule.getWinSymbolsInPayLine Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.getWinSymbolsInPayLine Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected getWinSymbolsInPayLine(payLine: PayLineInfo | PayWayInfo): cc.Node[]
```

---

## 2. Full Source Code

```typescript
protected getWinSymbolsInPayLine(payLine: PayLineInfo | PayWayInfo): cc.Node[] {
    this.mapSymbolToPayLine();
    const symbols = PaylineUtils.getWinIndexesInPayLine(this.matrix, payLine);
    return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
}
```
