---
id: "cc_slot_module:SlotPaylineSchedule:inheritance:override_points_matrix"
title: "SlotPaylineSchedule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotPaylineSchedule Override Points & Extension Matrix

<!-- convention-summary-start -->
### SlotPaylineSchedule Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Super Required | Return Type | Extension Purpose |
| :--- | :--- | :--- | :--- |
| `blinkAllPaylines` | No | `Promise<void>` | Customize Stage 1 concurrent delay. |
| `showAllPaylines` | No | `void` | Customize Stage 2 loop sequencing. |
| `onShowScatter` | No | `Promise<void>` | Custom Scatter anticipation timing. |
| `onShowBonus` | No | `Promise<void>` | Custom Bonus round trigger timing. |
| `showPayline` | Recommended | `void` | Custom line notification dispatching. |
