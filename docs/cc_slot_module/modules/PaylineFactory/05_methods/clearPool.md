---
id: "cc_slot_module:PaylineFactory:methods:clearPool"
title: "PaylineFactory.clearPool Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "clearPool"]
---

# 📖 `PaylineFactory.clearPool()`

<!-- convention-summary-start -->
### PaylineFactory.clearPool Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.clearPool Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Clears all inactive nodes from a named pool.

```typescript
public clearPool(name: string): void
```

---

## 2. Complete Source Code Implementation

```typescript
public clearPool(name: string): void {
    if (!this.poolMap.has(name)) {
        return;
    }

    const pool = this.poolMap.get(name);
    pool.clear();
}
```
