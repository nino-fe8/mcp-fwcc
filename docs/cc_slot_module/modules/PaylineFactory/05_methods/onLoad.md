---
id: "cc_slot_module:PaylineFactory:methods:onLoad"
title: "PaylineFactory.onLoad Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `PaylineFactory.onLoad()`

<!-- convention-summary-start -->
### PaylineFactory.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes internal pool and prefab maps, then preloads instances.

```typescript
protected onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onLoad(): void {
    this.poolItems.forEach(item => {
        this.prefabMap.set(item.name, item.prefab);
        this.poolMap.set(item.name, new NodePool(item.name));
        this.preloadObjects(item.name, item.initCount);
    });
}
```
