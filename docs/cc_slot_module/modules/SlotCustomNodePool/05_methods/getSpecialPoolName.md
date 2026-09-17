---
id: "cc_slot_module:SlotCustomNodePool:method:getSpecialPoolName"
title: "SlotCustomNodePool.getSpecialPoolName() Method Specification"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "method", "getSpecialPoolName"]
---

# `SlotCustomNodePool.getSpecialPoolName(symbolCode: string): string`

<!-- convention-summary-start -->
### SlotCustomNodePool.getSpecialPoolName() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool.getSpecialPoolName() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
protected getSpecialPoolName(symbolCode: string): string
```

---

## 2. Detailed Algorithmic Execution Logic
1. Returns formatted key: `'SlotCustomNodePool_special_' + symbolCode`.

---

## 3. Un-truncated Source Code Implementation
```typescript
protected getSpecialPoolName(symbolCode: string): string {
	return `${SPECIAL_POOL_NAME_PREFIX}${symbolCode}`;
}
```
