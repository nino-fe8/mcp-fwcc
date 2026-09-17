---
id: "cc_slot_module:VerticalCascadeModule:gotchas:index"
title: "VerticalCascadeModule Gotchas & Engine Defects Index"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ VerticalCascadeModule Gotchas & Engine Defects Index

<!-- convention-summary-start -->
### VerticalCascadeModule Gotchas & Engine Defects Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Gotchas & Engine Defects Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_respin_callback_timeout_leak.md`, `./02_multi_height_symbol_position_offset_bug.md`
- **Related Docs**: [`01_respin_callback_timeout_leak`](./01_respin_callback_timeout_leak.md), [`02_multi_height_symbol_position_offset_bug`](./02_multi_height_symbol_position_offset_bug.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_respin_callback_timeout_leak`](./01_respin_callback_timeout_leak.md)** | Orphaned Schedule Callback on Rapid Back-to-Real | HIGH | If a player interrupts during active drop, failure to call `unschedule(this._respinCB)` triggers phantom completion callbacks. |
| **[`02_multi_height_symbol_position_offset_bug`](./02_multi_height_symbol_position_offset_bug.md)** | Y-Offset Miscalculation for 3+ Cell Mega Symbols | MEDIUM | Multi-height symbols require bottom cell anchor adjustment; hardcoded math causes visual drift on non-uniform cells. |
