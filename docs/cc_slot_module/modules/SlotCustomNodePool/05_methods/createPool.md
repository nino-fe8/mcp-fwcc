---
id: "cc_slot_module:SlotCustomNodePool:method:createPool"
title: "SlotCustomNodePool.createPool() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "createPool"]
---

# `SlotCustomNodePool.createPool(poolName: string, template: cc.Prefab, count: number): cc.NodePool`

<!-- convention-summary-start -->
### SlotCustomNodePool.createPool() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool.createPool() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected createPool(poolName: string, template: cc.Prefab, count: number): cc.NodePool
```

---

## 2. Detailed Algorithmic Execution Logic
1. Constructs new `cc.NodePool(poolName)`.
2. Loops $count$ times:
   - Instantiates template node: `const obj = instantiate(template)`.
   - Stamps metadata: `this.setNodeMetadata(obj, poolName, false)`.
   - Stores into pool: `pool.put(obj)`.
3. Returns populated `cc.NodePool`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected createPool(poolName: string, template: cc.Prefab, count: number): cc.NodePool {
	const pool = new NodePool(poolName);
	for (let i = 0; i < count; i++) {
		const obj = instantiate(template);
		this.setNodeMetadata(obj, poolName, false);
		pool.put(obj);
	}
	return pool;
}
```
