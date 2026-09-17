---
id: "cc_slot_module:CascadeModuleData:gotchas:horizon_matrix_empty_default"
title: "Gotcha: Empty horizonMatrix and listTraceWayHorizontal Default"
category: "cc_slot_module"
tags: ["CascadeModuleData", "cascade_module_data", "cc_slot_module", "gotchas", "horizon_matrix", "horizontal_cascade"]
---

# ⚠️ Gotcha: Empty `horizonMatrix` & `listTraceWayHorizontal` Default

<!-- convention-summary-start -->
### Gotcha: Empty horizonMatrix and listTraceWayHorizontal Default Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Empty horizonMatrix and listTraceWayHorizontal Default.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

In `CascadeModuleData.formatData()`:
```typescript
let horizonMatrix = [];
let listTraceWayHorizontal = [];
...
return { verticalMatrix, listTraceWayVertical: listTraceWay, horizonMatrix, listTraceWayHorizontal };
```
The SDK only implements vertical column iteration for `verticalMatrix` and `listTraceWayVertical`. For games with **horizontal cascades** (e.g. symbols shifting left/right across rows), `horizonMatrix` and `listTraceWayHorizontal` are returned as empty arrays `[]`.

---

## 2. Solution & Recommendation

In horizontal tumble games, subclass `CascadeModuleData` and implement the row-major matrix transposition in `formatData()`.
