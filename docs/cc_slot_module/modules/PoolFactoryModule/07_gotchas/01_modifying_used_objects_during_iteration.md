---
id: "cc_slot_module:PoolFactoryModule:gotchas:modifying_used_objects"
title: "PoolFactoryModule Gotcha: Array Mutation during Bulk Return"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "gotchas", "array_mutation"]
---

# ⚠️ PoolFactoryModule Gotcha: Array Mutation during Bulk Return

<!-- convention-summary-start -->
### PoolFactoryModule Gotcha: Array Mutation during Bulk Return Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule Gotcha: Array Mutation during Bulk Return.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Defect
Calling `returnObject()` inside a naive `forEach` over `this._usedObjects` skips alternating elements because `splice()` mutates the array while iterating.

## 2. Root Cause & Solution
`PoolFactoryModule.returnAllObjects()` spreads a shallow clone `[...this._usedObjects]` before iterating, ensuring all nodes are reliably recycled:

```typescript
returnAllObjects(): void {
    [...this._usedObjects].forEach(obj => this.returnObject(obj));
    this._usedObjects = [];
}
```
