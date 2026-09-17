---
id: "cc_slot_module:BaseDataModule:gotcha:unregister_leak_on_dynamic_node_destroy"
title: "Gotcha: Dangling Reference When Dynamically Destroying Data Modules"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "gotchas", "memory_leak"]
---

# ⚠️ Gotcha: Dangling Reference When Dynamically Destroying Data Modules

<!-- convention-summary-start -->
### Gotcha: Dangling Reference When Dynamically Destroying Data Modules Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Dangling Reference When Dynamically Destroying Data Modules.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
After exiting a dynamically loaded mini-game prefab, next base game spin throws `Cannot set property of destroyed object`.

---

## 2. Root Cause Analysis
`start()` registers `this` to `dataStore.registerModule(this)`. When a mini-game node is destroyed, `GameDataStore` still holds a reference in its array unless `dataStore.removeModule(this)` is called.

---

## 3. Recommended Resolution
In dynamic components that get destroyed, unregister on cleanup:
```typescript
onDestroy(): void {
    if (this.dataStore) {
        this.dataStore.removeModule(this);
    }
}
```
