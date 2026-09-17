---
id: "cc_slot_module:PoolFactoryModule:methods:getObject"
title: "PoolFactoryModule.getObject Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "getObject"]
---

# 📖 `PoolFactoryModule.getObject()`

<!-- convention-summary-start -->
### PoolFactoryModule.getObject Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule.getObject Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Fetches a node from the pool if available (`this._pool.size() > 0`), or instantiates a fresh instance of `this.template`. Adds the node to `_usedObjects` and returns it.

```typescript
public getObject(): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
getObject(): cc.Node {
    const obj = this._pool.size() ? this._pool.get() : instantiate(this.template);
    this._usedObjects.push(obj);

    return obj;
}
```
