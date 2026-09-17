---
id: "cc_slot_module:SpinTimesModule:gotchas:index"
title: "SpinTimesModule Gotchas Index"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "gotchas", "index"]
---

# ⚠️ SpinTimesModule Gotchas Index

<!-- convention-summary-start -->
### SpinTimesModule Gotchas Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Gotchas Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `./01_infinity_spin_count_formatting.md`, `./02_stale_spin_times_label_visibility.md`
- **Related Docs**: [`01_infinity_spin_count_formatting`](./01_infinity_spin_count_formatting.md), [`02_stale_spin_times_label_visibility`](./02_stale_spin_times_label_visibility.md)
<!-- convention-summary-end -->


---

## 1. Catalog of Pitfalls

| Gotcha ID | Title | Severity | Impact Summary |
| :--- | :--- | :--- | :--- |
| **[`01_infinity_spin_count_formatting`](./01_infinity_spin_count_formatting.md)** | Text Overflow from Unbounded Spin Quantities | MEDIUM | Auto-spin counts exceeding 100,000 must render `'∞'` rather than clipping wide integer strings. |
| **[`02_stale_spin_times_label_visibility`](./02_stale_spin_times_label_visibility.md)** | Lingering Free Spin Counter on Mode Exit | HIGH | Failing to reset `freeSpinTimes` when switching modes leaves orphaned badges visible in normal game. |
