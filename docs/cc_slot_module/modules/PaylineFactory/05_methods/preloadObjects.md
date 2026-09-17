---
id: "cc_slot_module:PaylineFactory:methods:preloadObjects"
title: "PaylineFactory.preloadObjects Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "preloadObjects"]
---

# 📖 `PaylineFactory.preloadObjects()`

<!-- convention-summary-start -->
### PaylineFactory.preloadObjects Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.preloadObjects Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Pre-spawns `count` nodes into the specified pool.

```typescript
protected preloadObjects(name: string, count: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected preloadObjects(name: string, count: number): void {
    const pool = this.poolMap.get(name);

    for (let i = 0; i < count; i++) {
        const node = this._spawnObject(name);
        pool.put(node);
    }
}
```
