---
id: "cc_slot_module:SlotSymbolManager:method:createBlurSymbol"
title: "SlotSymbolManager.createBlurSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "createBlurSymbol"]
---

# `SlotSymbolManager.createBlurSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string): cc.Node`

<!-- convention-summary-start -->
### SlotSymbolManager.createBlurSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.createBlurSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public createBlurSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
1. Obtains a symbol node: `this.getSymbol(owner)`.
2. Sets parent: `symbol.setParent(parent)`.
3. Calls `symbolModule.init(code, size)`.
4. Switches presentation: `symbolModule.changeToBlurSymbol()`.
5. Returns node.

---

## 3. Un-truncated Source Code Implementation
```typescript
createBlurSymbol(code: string, size: cc.Vec2, parent: cc.Node, owner: string = ""): cc.Node {
    const symbol = this.getSymbol(owner);
    symbol.setParent(parent);

    const symbolModule = this.getSymbolModule(symbol);
    symbolModule.init(code, size);
    symbolModule.changeToBlurSymbol();

    return symbol;
}
```
