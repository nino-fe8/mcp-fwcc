---
id: "cc_slot_module:SlotTablePaylineModule:inheritance:override_points_matrix"
title: "SlotTablePaylineModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTablePaylineModule", "slot_table_payline_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTablePaylineModule Override Points Matrix

<!-- convention-summary-start -->
### SlotTablePaylineModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `initExtend()` | Empty virtual hook | `YES` | None | Initializing custom particle layers or custom line drawers. |
| `registerEvents()` | Binds `SETUP_PAYLINES` | `YES` | `MANDATORY` | Subscribing to custom game mode events. |
| `onSetupPaylines()` | Dispatches `PAYLINE_SET_DATA` | `YES` | `RECOMMENDED` | Injecting custom multipliers or feature metadata. |
| `onDestroy()` | Calls `unregisterEvents` | `YES` | `MANDATORY` | Cleaning up custom observers. |
