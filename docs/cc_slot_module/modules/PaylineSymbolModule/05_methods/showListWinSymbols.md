---
id: "cc_slot_module:PaylineSymbolModule:method:showListWinSymbols"
title: "PaylineSymbolModule.showListWinSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showListWinSymbols"]
---

# 🚀 `PaylineSymbolModule.showListWinSymbols(symbolSet, duration): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.showListWinSymbols Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.showListWinSymbols Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected showListWinSymbols(symbolSet: cc.Node[], duration?: number): void
```

---

## 2. Full Source Code

```typescript
protected showListWinSymbols(symbolSet: cc.Node[], duration?: number): void {
    if (symbolSet.length === 0) {
        return;
    }

    this.dimAllPayLines(symbolSet);

    for (const symbol of symbolSet) {
        this.playSymbolAnimation(symbol, duration);
    }

    this.updateSymbolSiblingIndex();
}
```
