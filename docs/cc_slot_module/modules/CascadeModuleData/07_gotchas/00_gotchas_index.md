---
id: "cc_slot_module:CascadeModuleData:gotchas:index"
title: "CascadeModuleData Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ CascadeModuleData Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### CascadeModuleData Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleData Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_traceway_in_place_sort.md`, `./02_horizon_matrix_empty_default.md`
- **Related Docs**: [`01_traceway_in_place_sort`](./01_traceway_in_place_sort.md), [`02_horizon_matrix_empty_default`](./02_horizon_matrix_empty_default.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_traceway_in_place_sort`](./01_traceway_in_place_sort.md)** | In-Place `Array.prototype.sort` on `this["traceWay"]` | MEDIUM | `getTraceWay()` sorts `this["traceWay"]` in-place, mutating the original array received from `GameDataStore`. |
| **[`02_horizon_matrix_empty_default`](./02_horizon_matrix_empty_default.md)** | Empty `horizonMatrix` and `listTraceWayHorizontal` by Default | MEDIUM | `formatData()` returns empty arrays for horizontal matrices; horizontal tumble games must override. |
