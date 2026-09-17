---
id: "cc_slot_module:PaylineFactory:methods:returnObject"
title: "PaylineFactory.returnObject Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "returnObject"]
---

# 📖 `PaylineFactory.returnObject()`

<!-- convention-summary-start -->
### PaylineFactory.returnObject Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory.returnObject Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Cleans parent, deactivates node, and recycles it to its tagged pool (`__prefabName__`).

```typescript
public returnObject(node: cc.Node): void
```

---

## 2. Complete Source Code Implementation

```typescript
public returnObject(node: cc.Node): void {
    const name = node['__prefabName__'];
    if (!this.poolMap.has(name)) {
        warn(`Pool ${name} not found.`);
        node.destroy();
        return;
    }

    node.parent = null;
    node.active = false;

    const pool = this.poolMap.get(name);
    pool.put(node);
}
```
