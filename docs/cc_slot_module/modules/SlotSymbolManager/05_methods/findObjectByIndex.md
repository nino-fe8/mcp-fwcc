---
id: "cc_slot_module:SlotSymbolManager:method:findObjectByIndex"
title: "SlotSymbolManager.findObjectByIndex() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "findObjectByIndex"]
---

# `SlotSymbolManager.findObjectByIndex(index: number): cc.Node`

<!-- convention-summary-start -->
### SlotSymbolManager.findObjectByIndex() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.findObjectByIndex() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public findObjectByIndex(index: number): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Searches `this.usingSymbols` for a node whose `symbolModule.getIndex() === index`. If found, sets `symbol.active = true` and returns the node; otherwise returns `null`.

---

## 3. Un-truncated Source Code Implementation
```typescript
findObjectByIndex(index: number): cc.Node {
    const symbol = this.usingSymbols.find((symbol) => this.getSymbolModule(symbol) && this.getSymbolModule(symbol).getIndex() === index);
    if (!symbol) {
        return null;
    }
    symbol.active = true;
    return symbol;
}
```
