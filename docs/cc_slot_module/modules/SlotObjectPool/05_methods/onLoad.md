---
id: "cc_slot_module:SlotObjectPool:methods:onLoad"
title: "SlotObjectPool.onLoad Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `SlotObjectPool.onLoad()`

<!-- convention-summary-start -->
### SlotObjectPool.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Loops `initCount` times, calling `this.get()` followed immediately by `this.put()` to populate the pool with ready-to-use instances.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    for (let i = 0; i < this.initCount; i++) {
        const object = this.get();
        this.put(object);
    }
}
```
