---
id: "cc_slot_module:PoolFactoryModule:methods:getSize"
title: "PoolFactoryModule.getSize Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "getSize"]
---

# 📖 `PoolFactoryModule.getSize()`

<!-- convention-summary-start -->
### PoolFactoryModule.getSize Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule.getSize Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Returns the number of available nodes currently in `this._pool`.

```typescript
public getSize(): number
```

---

## 2. Complete Source Code Implementation

```typescript
getSize(): number {
    return this._pool.size();
}
```
