---
id: "cc_slot_module:PaylineFactory:gotchas:lost_prefab_name_tag"
title: "Gotcha: Lost __prefabName__ Tag on External Clones"
category: "cc_slot_module"
tags: ["PaylineFactory", "payline_factory", "cc_slot_module", "gotchas", "prefab_tag", "memory_leak"]
---

# ⚠️ Gotcha: Lost `__prefabName__` Tag on External Clones

<!-- convention-summary-start -->
### Gotcha: Lost __prefabName__ Tag on External Clones Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Lost __prefabName__ Tag on External Clones.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`returnObject(node)` checks:
```typescript
const name = node['__prefabName__'];
if (!this.poolMap.has(name)) {
    warn(`Pool ${name} not found.`);
    node.destroy();
    return;
}
```
If a developer spawns a node manually via `cc.instantiate(prefab)` without setting `node['__prefabName__'] = name`, returning it to the factory destroys the node instead of caching it in the pool.

---

## 2. Recommended Best Practice

Always use `paylineFactory.getObject(name)` to obtain instances so the `__prefabName__` tag is automatically stamped.
