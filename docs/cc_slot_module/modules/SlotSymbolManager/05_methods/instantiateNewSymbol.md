---
id: "cc_slot_module:SlotSymbolManager:method:instantiateNewSymbol"
title: "SlotSymbolManager.instantiateNewSymbol() Method Specification"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "method", "instantiateNewSymbol"]
---

# `SlotSymbolManager.instantiateNewSymbol(): cc.Node`

<!-- convention-summary-start -->
### SlotSymbolManager.instantiateNewSymbol() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager.instantiateNewSymbol() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected instantiateNewSymbol(): cc.Node
```

---

## 2. Detailed Algorithmic Execution Logic
Instantiates a new `cc.Node` clone from `this.template` prefab and returns it.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected instantiateNewSymbol(): cc.Node {
    const symbol = instantiate(this.template);

    return symbol;
}
```
