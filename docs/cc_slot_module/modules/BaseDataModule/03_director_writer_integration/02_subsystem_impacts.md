---
id: "cc_slot_module:BaseDataModule:director_writer:subsystem_impacts"
title: "BaseDataModule Subsystem Impact Matrix"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BaseDataModule Subsystem Impact Matrix

<!-- convention-summary-start -->
### BaseDataModule Subsystem Impact Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Subsystem Impact Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Subsystems Cross-Reference

| Derived Data Module | Inherits From | Registered Keys | Downstream Consumer |
| :--- | :--- | :--- | :--- |
| **`SlotTableData`** | `BaseDataModule` | `['matrix']` | `SlotTableModule` |
| **`SlotTablePaylineData`** | `BaseDataModule` | `['payLines', 'winAmount']` | `SlotTablePaylineModule` |
| **`CascadeModuleData`** | `BaseDataModule` | `['cascadeMatrix', 'step', 'multiplier']` | `CascadeModule` |
| **`ClusterModuleData`** | `BaseDataModule` | `['clusters', 'removedPositions']` | `ClusterModule` |
| **`WinAmountData`** | `BaseDataModule` | `['winAmount', 'jackpotWin']` | `WinAmountModule` |
