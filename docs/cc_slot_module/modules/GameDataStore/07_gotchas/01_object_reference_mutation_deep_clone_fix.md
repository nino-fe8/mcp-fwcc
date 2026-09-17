---
id: "cc_slot_module:GameDataStore:gotcha:object_reference_mutation_deep_clone_fix"
title: "Gotcha: Object Reference Mutation Prevention via Deep Clone"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "gotchas", "deep_clone", "state_corruption"]
---

# ⚠️ Gotcha: Object Reference Mutation Prevention via Deep Clone

<!-- convention-summary-start -->
### Gotcha: Object Reference Mutation Prevention via Deep Clone Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Object Reference Mutation Prevention via Deep Clone.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
When `SlotTableModule` modifies an element in its local matrix during spin animations, `SlotTablePaylineModule` receives the altered matrix instead of the original server landing result.

---

## 2. Root Cause Analysis
In JavaScript, passing array and object references directly allows downstream consumers to mutate shared memory. `GameDataStore.updateDataModules()` explicitly guarantees immutability:
```typescript
if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
    value = JSON.parse(JSON.stringify(value));
}
module.onDataUpdate(key, value);
```

---

## 3. Recommended Resolution
Never bypass `updateDataModules()` or attempt to read raw references directly from `dataStore.playSession` without cloning if modifications are intended.
