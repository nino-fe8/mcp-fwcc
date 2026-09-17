---
id: "cc_slot_module:PaylineFactory:methods:clearAllPools"
title: "PaylineFactory.clearAllPools Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "clearAllPools"]
---

# 📖 `PaylineFactory.clearAllPools()`

<!-- convention-summary-start -->
### PaylineFactory.clearAllPools Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.clearAllPools Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Flushes all managed NodePools.

```typescript
public clearAllPools(): void
```

---

## 2. Complete Source Code Implementation

```typescript
public clearAllPools(): void {
    this.poolMap.forEach((pool, name) => {
        this.clearPool(name);
    });
}
```
