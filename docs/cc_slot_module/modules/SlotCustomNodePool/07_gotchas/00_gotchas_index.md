---
id: "cc_slot_module:SlotCustomNodePool:gotchas:index"
title: "SlotCustomNodePool Gotchas & Pitfalls Index"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SlotCustomNodePool Gotchas & Pitfalls Index

<!-- convention-summary-start -->
### SlotCustomNodePool Gotchas & Pitfalls Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Gotchas & Pitfalls Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_corrupted_pool_key_destroy_fallback.md`
- **Related Docs**: [`01_corrupted_pool_key_destroy_fallback.md`](./01_corrupted_pool_key_destroy_fallback.md)
<!-- convention-summary-end -->


---

## 1. Known Gotchas Summary Table

| Gotcha Document | Symptom | Root Cause | Fix Strategy |
| :--- | :--- | :--- | :--- |
| **[`01_corrupted_pool_key_destroy_fallback.md`](./01_corrupted_pool_key_destroy_fallback.md)** | Nodes destroyed instead of reused in pool, causing GC memory spikes. | External script cleared `node['__custom_pool_name_']` property. | Never overwrite dynamic metadata properties on pooled symbol nodes. |
