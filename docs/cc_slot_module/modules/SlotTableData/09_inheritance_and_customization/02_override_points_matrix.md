---
id: "cc_slot_module:SlotTableData:customization:override_points_matrix"
title: "SlotTableData Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableData", "slot_table_data", "cc_slot_module", "customization", "override_points"]
---

# 📋 SlotTableData Override Points Matrix

<!-- convention-summary-start -->
### SlotTableData Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableData Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `onloadExtend(): void` | `YES` | Optional | Resolves custom configurations. |
| `getMatrix(): string[][]` | `YES` | Optional | Non-standard matrix transforms. |
| `getRawMatrix(): string[]` | `YES` | Optional | Special game mode matrix fallbacks. |
| `getResumeMatrix(gameMode?): string[][]` | `YES` | Optional | Custom session resume hydration logic. |
