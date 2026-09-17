---
id: "cc_slot_module:SlotCustomNodePool:method:setupSpecialSymbolPool"
title: "SlotCustomNodePool.setupSpecialSymbolPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "setupSpecialSymbolPool"]
---

# `SlotCustomNodePool.setupSpecialSymbolPool(): void`

<!-- convention-summary-start -->
### SlotCustomNodePool.setupSpecialSymbolPool() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool.setupSpecialSymbolPool() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected setupSpecialSymbolPool(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over `this.specialSymbolTemplates`.
2. For each defined template:
   - Computes unique pool key: `poolName = this.getSpecialPoolName(symbolCode)`.
   - Creates and populates pool: `pool = this.createPool(poolName, template, initCount)`.
   - Caches pool into map: `this._pools.set(poolName, pool)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected setupSpecialSymbolPool(): void {
	this.specialSymbolTemplates.forEach(({ symbolCode, template, initCount }) => {
		if (template) {
			const poolName = this.getSpecialPoolName(symbolCode);
			const pool = this.createPool(poolName, template, initCount);
			this._pools.set(poolName, pool);
		}
	});
}
```
