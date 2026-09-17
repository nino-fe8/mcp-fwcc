---
id: "cc_slot_module:PaylineSymbolModule:method:showSpecialSymbolById"
title: "PaylineSymbolModule.showSpecialSymbolById Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showSpecialSymbolById"]
---

# 🚀 `PaylineSymbolModule.showSpecialSymbolById(symbolId, duration): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.showSpecialSymbolById Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.showSpecialSymbolById Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected showSpecialSymbolById(symbolId: string, duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showSpecialSymbolById(symbolId: string, duration?: number): void {
    if (symbolId) {
        const symbolSet: cc.Node[] = this.symbols.filter(symbol => symbol["symbolCode"] === symbolId);
        this.showListWinSymbols(symbolSet, duration);
    }
}
```
