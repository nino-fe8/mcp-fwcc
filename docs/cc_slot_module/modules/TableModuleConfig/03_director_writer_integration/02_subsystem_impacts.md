---
id: "cc_slot_module:TableModuleConfig:director_writer:subsystem_impacts"
title: "TableModuleConfig Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 TableModuleConfig Subsystem Impact Matrix

<!-- convention-summary-start -->
### TableModuleConfig Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Property / Method | `SlotTableModule` | `SlotReelModule` | `SlotTableNearWinModule` | `SlotTablePaylineModule` |
| :--- | :--- | :--- | :--- | :--- |
| **`TABLE_FORMAT`** | Computes column count & spacing | Sets row symbol count per reel | Determines scatter thresholds | Validates payline bounds |
| **`SYMBOL_INDEXES`**| Coordinate mapping | Maps index to reel row | Locates scatter coordinates | Maps winning line symbols |
| **`MODES`** | Selects mode in `startSpin()` | Controls deceleration curves | None | None |
| **`NEAR_WIN_DELAY_TIME`** | None | Slows down anticipated column | Injects delay into reel stop | None |
