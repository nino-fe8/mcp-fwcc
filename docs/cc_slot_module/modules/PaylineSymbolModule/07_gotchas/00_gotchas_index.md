---
id: "cc_slot_module:PaylineSymbolModule:gotchas:index"
title: "PaylineSymbolModule Engine Gotchas Index"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ PaylineSymbolModule Engine Gotchas Index

<!-- convention-summary-start -->
### PaylineSymbolModule Engine Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Engine Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_z_index_sorting_clipping_glitch.md`, `./02_symbol_parent_mutation_memory_leak.md`
- **Related Docs**: [`01_z_index_sorting_clipping_glitch.md`](./01_z_index_sorting_clipping_glitch.md), [`02_symbol_parent_mutation_memory_leak.md`](./02_symbol_parent_mutation_memory_leak.md)
<!-- convention-summary-end -->


---

## 1. Known Gotchas Summary

| Gotcha Document | Symptom | Severity | Engine Subsystem |
| :--- | :--- | :--- | :--- |
| **[`01_z_index_sorting_clipping_glitch.md`](./01_z_index_sorting_clipping_glitch.md)** | Spine win animations clipped by adjacent reel mask boundaries. | `HIGH` | Scene Graph / Rendering |
| **[`02_symbol_parent_mutation_memory_leak.md`](./02_symbol_parent_mutation_memory_leak.md)** | Missing `PAYLINE_CLEAR` leaves orphaned symbol nodes in container on next spin. | `CRITICAL` | Node Pooling |
