---
id: "cc_slot_module:PaylineSymbolModule:method:getAllWinSymbols"
title: "PaylineSymbolModule.getAllWinSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "getAllWinSymbols"]
---

# 🚀 `PaylineSymbolModule.getAllWinSymbols(): cc.Node[]`

<!-- convention-summary-start -->
### PaylineSymbolModule.getAllWinSymbols Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.getAllWinSymbols Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected getAllWinSymbols(): cc.Node[]
```

---

## 2. Full Source Code

```typescript
protected getAllWinSymbols(): cc.Node[] {
    this.mapSymbolToPayLine();
    const symbols = PaylineUtils.getAllWinSymbols(this.matrix, this.payLines);
    return symbols.map(symbol => this.getSymbol(symbol.reel, symbol.row)).filter(Boolean);
}
```
