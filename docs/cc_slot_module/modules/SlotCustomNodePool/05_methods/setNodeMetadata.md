---
id: "cc_slot_module:SlotCustomNodePool:method:setNodeMetadata"
title: "SlotCustomNodePool.setNodeMetadata() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "setNodeMetadata", "metadata_injection"]
---

# `SlotCustomNodePool.setNodeMetadata(node: cc.Node, poolName: string, isSpecial: boolean): void`

<!-- convention-summary-start -->
### SlotCustomNodePool.setNodeMetadata() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool.setNodeMetadata() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected setNodeMetadata(node: cc.Node, poolName: string, isSpecial: boolean): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Assigns `node['__custom_pool_name_'] = poolName` (Enables $O(1)$ pool resolution upon recycling).
2. Assigns `node[SPECIAL_SYMBOL_KEY] = isSpecial` (Protects persistent Spine skeleton caches).

---

## 3. Un-truncated Source Code Implementation
```typescript
protected setNodeMetadata(node: cc.Node, poolName: string, isSpecial: boolean): void {
	node[CUSTOM_POOL_NAME_KEY] = poolName;
	node[SPECIAL_SYMBOL_KEY] = isSpecial;
}
```
