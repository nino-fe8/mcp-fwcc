---
id: "cc_slot_module:MultipleSymbolManager:method:initSymbolPool"
title: "MultipleSymbolManager.initSymbolPool() Method Specification"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "method", "initSymbolPool"]
---

# `MultipleSymbolManager.initSymbolPool(): void`

<!-- convention-summary-start -->
### MultipleSymbolManager.initSymbolPool() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager.initSymbolPool() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public initSymbolPool(): void
```

---

## 2. Trigger Source & Lifecycle
* **Invoker**: Overrides `SlotSymbolManager.initSymbolPool()`, called during game setup.

---

## 3. Detailed Algorithmic Execution Logic
1. Constructs new `SlotCustomNodePool(this.template, this.initCount, this.specialSymbolTemplates)`.
2. Triggers `this.symbolPool.initSymbolPool()` to instantiate and cache all sub-pools.

---

## 4. Un-truncated Source Code Implementation
```typescript
initSymbolPool(): void {
	this.symbolPool = new SlotCustomNodePool(this.template, this.initCount, this.specialSymbolTemplates);
	this.symbolPool.initSymbolPool();
}
```
