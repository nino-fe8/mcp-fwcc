---
id: "cc_slot_module:SlotSymbolManager:method:getSymbol"
title: "SlotSymbolManager.getSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "getSymbol"]
---

# `SlotSymbolManager.getSymbol(owner: string, code: string): cc.Node`

<!-- convention-summary-start -->
### SlotSymbolManager.getSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.getSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getSymbol(owner: string = "", code: string = ""): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains a symbol node from the pool via `this.getSymbolFromPool(code)`.
2. If `owner` is provided, sets owner metadata on `SlotSymbolModule`.
3. Adds symbol node to `this.usingSymbols`.
4. Activates node: `symbol.active = true`.
5. Returns node.

---

## 3. Un-truncated Source Code Implementation
```typescript
getSymbol(owner: string = "", code: string = ""): cc.Node {
    let symbol = this.getSymbolFromPool(code);
    if (owner) {
        const symbolModule = this.getSymbolModule(symbol);
        symbolModule.setOwner(owner);
    }
    this.usingSymbols.push(symbol);
    symbol.active = true;
    return symbol;
}
```
