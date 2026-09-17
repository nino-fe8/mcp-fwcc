---
id: "cc_slot_module:PoolFactoryModule:methods:returnAllObjects"
title: "PoolFactoryModule.returnAllObjects Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "returnAllObjects"]
---

# 📖 `PoolFactoryModule.returnAllObjects()`

<!-- convention-summary-start -->
### PoolFactoryModule.returnAllObjects Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule.returnAllObjects Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Safely iterates through a copy of `_usedObjects` and returns each node to the pool via `returnObject(obj)`, resetting `_usedObjects` to an empty array.

```typescript
public returnAllObjects(): void
```

---

## 2. Complete Source Code Implementation

```typescript
returnAllObjects(): void {
    [...this._usedObjects].forEach(obj => this.returnObject(obj));
    this._usedObjects = [];
}
```
