---
id: "cc_slot_module:PoolFactoryModule:methods:onLoad"
title: "PoolFactoryModule.onLoad Method"
category: "cc_slot_module"
tags: ["PoolFactoryModule", "pool_factory_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PoolFactoryModule.onLoad()`

<!-- convention-summary-start -->
### PoolFactoryModule.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PoolFactoryModule.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes the `cc.NodePool` using the node's name, instantiates `initCount` items of `template`, puts them into the pool, and calls `onLoadExtend()`.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this._pool = new NodePool(this.name);
    for (let index = 0; index < this.initCount; index++) {
        if (!this.template) {
            continue;
        }
        const element = instantiate(this.template);
        this._pool.put(element);
    }

    this.onLoadExtend();
}
```
