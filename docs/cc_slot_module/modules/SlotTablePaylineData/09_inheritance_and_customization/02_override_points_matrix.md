---
id: "cc_slot_module:SlotTablePaylineData:inheritance:override_points_matrix"
title: "SlotTablePaylineData Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTablePaylineData", "slot_table_payline_data", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTablePaylineData Override Points Matrix

<!-- convention-summary-start -->
### SlotTablePaylineData Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTablePaylineData Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `getPayLines()` | Mode routing & sorting | `YES` | Optional | Custom filtering of small wins or progressive line unlocks. |
| `getMatrix()` | Matrix conversion via `eno.SlotUtils` | `YES` | Optional | Ingesting custom Wild transformation matrices. |
| `convertPayLine()` | Switches on `PAYLINE_TYPE` | `YES` | Optional | Adding custom proprietary pay evaluation logic. |
| `sortPayLines()` | Left before Right sorting | `YES` | Optional | Priority-based line ordering (e.g. highest win first). |
