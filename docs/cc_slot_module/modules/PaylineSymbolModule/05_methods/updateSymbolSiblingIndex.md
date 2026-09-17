---
id: "cc_slot_module:PaylineSymbolModule:method:updateSymbolSiblingIndex"
title: "PaylineSymbolModule.updateSymbolSiblingIndex Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "updateSymbolSiblingIndex"]
---

# 🚀 `PaylineSymbolModule.updateSymbolSiblingIndex(symbols): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.updateSymbolSiblingIndex Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.updateSymbolSiblingIndex Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected updateSymbolSiblingIndex(symbols: cc.Node[] = []): void
```

---

## 2. Full Source Code

```typescript
protected updateSymbolSiblingIndex(symbols: cc.Node[] = []): void {
    if (!symbols || symbols.length === 0) {
        symbols = this.symbols;
    }

    if (this.disableHighlightContainer) {
        for (const symbol of symbols) {
            if (symbol['isHighlight'] === false) {
                eno.changeParent(symbol, this.disableHighlightContainer);
            }
        }
    }

    this.factory.updateSymbolSiblingIndex(symbols);
}
```
