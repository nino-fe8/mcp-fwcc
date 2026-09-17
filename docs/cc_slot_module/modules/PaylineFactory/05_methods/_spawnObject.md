---
id: "cc_slot_module:PaylineFactory:methods:_spawnObject"
title: "PaylineFactory._spawnObject Method"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "methods", "_spawnObject"]
---

# 📖 `PaylineFactory._spawnObject()`

<!-- convention-summary-start -->
### PaylineFactory._spawnObject Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineFactory._spawnObject Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Instantiates the registered prefab asset and tags it with `__prefabName__`.

```typescript
protected _spawnObject(name: string): cc.Node
```

---

## 2. Complete Source Code Implementation

```typescript
protected _spawnObject(name: string): cc.Node {
    const prefab = this.prefabMap.get(name);
    const node = instantiate(prefab);
    node['__prefabName__'] = name;
    return node;
}
```
