---
id: "cc_slot_module:SlotObjectPool:gotchas:invalid_prefab"
title: "SlotObjectPool Gotcha: Missing Inspector Prefab Reference"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "gotchas", "null_prefab"]
---

# ⚠️ SlotObjectPool Gotcha: Missing Inspector Prefab Reference

<!-- convention-summary-start -->
### SlotObjectPool Gotcha: Missing Inspector Prefab Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Gotcha: Missing Inspector Prefab Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom
Calling `get()` throws an error in the console: `"Prefab object is not valid in Object Pool..."` and returns `null`, causing downstream coordinate assignments to crash with `TypeError: Cannot set property 'position' of null`.

## 2. Solution
Always verify in Cocos Creator Editor that the `prefabObject` property is populated, or guard calls with `if (node) { ... }`.
