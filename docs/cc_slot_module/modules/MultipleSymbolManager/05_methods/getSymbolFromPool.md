---
id: "cc_slot_module:MultipleSymbolManager:method:getSymbolFromPool"
title: "MultipleSymbolManager.getSymbolFromPool() Method Specification"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "method", "getSymbolFromPool"]
---

# `MultipleSymbolManager.getSymbolFromPool(code: string): cc.Node`

<!-- convention-summary-start -->
### MultipleSymbolManager.getSymbolFromPool() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager.getSymbolFromPool() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public getSymbolFromPool(code: string): cc.Node
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Overrides `SlotSymbolManager.getSymbolFromPool(code)` when creating or checking out a symbol.

---

## 3. Detailed Algorithmic Execution Logic
1. Passes `code` directly to `this.symbolPool.get(code)`.
2. Returns the resolved symbol `cc.Node`.

---

## 4. Un-truncated Source Code Implementation
```typescript
getSymbolFromPool(code: string): cc.Node {
	return this.symbolPool.get(code);
}
```
