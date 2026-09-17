---
id: "cc_slot_module:SlotCustomNodePool:method:size"
title: "SlotCustomNodePool.size() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "size"]
---

# `SlotCustomNodePool.size(): number`

<!-- convention-summary-start -->
### SlotCustomNodePool.size() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool.size() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public size(): number
```

---

## 2. Detailed Algorithmic Execution Logic
1. Iterates over all pools in `this._pools`.
2. Sums up `pool.size()` across all registered pools.
3. Returns aggregate ready node count.

---

## 3. Un-truncated Source Code Implementation
```typescript
size(): number {
	let totalSize = 0;
	this._pools.forEach(pool => {
		totalSize += pool.size();
	});
	return totalSize;
}
```
