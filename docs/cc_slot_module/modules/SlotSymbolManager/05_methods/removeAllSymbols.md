---
id: "cc_slot_module:SlotSymbolManager:method:removeAllSymbols"
title: "SlotSymbolManager.removeAllSymbols() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "removeAllSymbols", "sticky_protection"]
---

# `SlotSymbolManager.removeAllSymbols(): void`

<!-- convention-summary-start -->
### SlotSymbolManager.removeAllSymbols() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.removeAllSymbols() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public removeAllSymbols(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through a clone `[...this.usingSymbols]` array. For each symbol, inspects `symbolModule.getIndex()`. If index is NOT `SymbolIndexType.STICKY` and NOT `SymbolIndexType.GIGABLOX`, invokes `this.removeSymbol(obj)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
removeAllSymbols(): void {
    [...this.usingSymbols].forEach((obj) => {
        const symbolModule = this.getSymbolModule(obj);
        const symbolIndex = symbolModule.getIndex();
        if (symbolIndex !== SymbolIndexType.STICKY && symbolIndex !== SymbolIndexType.GIGABLOX) {
            this.removeSymbol(obj);
        }
    });
}
```
