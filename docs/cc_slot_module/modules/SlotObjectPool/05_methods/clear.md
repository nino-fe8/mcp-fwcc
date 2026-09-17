---
id: "cc_slot_module:SlotObjectPool:methods:clear"
title: "SlotObjectPool.clear Method"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "methods", "clear"]
---

# 📖 `SlotObjectPool.clear()`

<!-- convention-summary-start -->
### SlotObjectPool.clear Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool.clear Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Safely iterates all active nodes in `usingObjects` and returns each to the pool via `this.put(object)`.

```typescript
public clear(): void
```

---

## 2. Complete Source Code Implementation

```typescript
clear(): void {
    if (!isValid(this)) {
        return;
    }

    [...this.usingObjects].forEach((object) => {
        this.put(object);
    });
    this.usingObjects = [];
}
```
