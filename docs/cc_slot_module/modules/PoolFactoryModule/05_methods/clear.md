---
id: "cc_slot_module:PoolFactoryModule:methods:clear"
title: "PoolFactoryModule.clear Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "clear"]
---

# 📖 `PoolFactoryModule.clear()`

<!-- convention-summary-start -->
### PoolFactoryModule.clear Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule.clear Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Recycles all checked-out objects and purges the internal `cc.NodePool`.

```typescript
public clear(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clear(): void {
    this.returnAllObjects();
    this._pool.clear();
}
```
