---
id: "cc_slot_module:PaylineFactory:methods:getObject"
title: "PaylineFactory.getObject Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "getObject"]
---

# 📖 `PaylineFactory.getObject()`

<!-- convention-summary-start -->
### PaylineFactory.getObject Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.getObject Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Retrieves a node from the named pool, or spawns a new one if pool is empty.

```typescript
public getObject(name: string): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
public getObject(name: string): cc.Node {
    if (!this.prefabMap.has(name)) {
        error(`Prefab ${name} not registered.`);
        return null;
    }

    const pool = this.poolMap.get(name);
    let node = pool.get();

    if (pool.size() > 0) {
        node = pool.get();
    } else {
        node = this._spawnObject(name);
    }

    return node;
}
```
