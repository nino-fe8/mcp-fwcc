---
id: "cc_slot_module:PaylineSymbolModule:method:showIdleSymbols"
title: "PaylineSymbolModule.showIdleSymbols Method"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "methods", "showIdleSymbols"]
---

# 🚀 `PaylineSymbolModule.showIdleSymbols(symbols): void`

<!-- convention-summary-start -->
### PaylineSymbolModule.showIdleSymbols Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule.showIdleSymbols Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
protected showIdleSymbols(symbols: cc.Node[]): void
```

---

## 2. Full Source Code

```typescript
protected showIdleSymbols(symbols: cc.Node[]): void {
    if (!symbols || symbols.length === 0) {
        symbols = this.symbols;
    }

    for (const symbol of symbols) {
        eno.changeParent(symbol, this.container);
        symbol.emit('ENABLE_HIGHLIGHT');
        if (!SlotSymbolModule.getModuleComponent(symbol).getIsPlaying()) {
            symbol.emit('PLAY_ANIMATION_IDLE');
        }
    }
    this.updateSymbolSiblingIndex(symbols);
}
```
