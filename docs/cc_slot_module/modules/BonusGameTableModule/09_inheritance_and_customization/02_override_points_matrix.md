---
id: "cc_slot_module:BonusGameTableModule:customization:override_points_matrix"
title: "BonusGameTableModule Extension Points Matrix"
category: "cc_slot_module"
tags: ["BonusGameTableModule", "bonus_game_table", "cc_slot_module", "customization", "override_matrix", "hooks"]
---

# 📊 BonusGameTableModule Extension Points Matrix

<!-- convention-summary-start -->
### BonusGameTableModule Extension Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameTableModule Extension Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Extension Points Matrix

| Method Name | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`initBoxes()`** | Grid instantiation loop | `YES` | `OPTIONAL` | Implement circular or irregular honeycomb layouts. |
| **`getPosByIndex(idx)`** | Row/column step math | `YES` | `OPTIONAL` | Customize spatial placement of individual chests. |
| **`openBox(idx, val)`** | Emits `BOX_OPEN` to node | `YES` | `RECOMMENDED` | Trigger special audio or camera shakes on specific chests. |
| **`openAllBoxes(res)`** | Reveals remaining unopened boxes | `YES` | `RECOMMENDED` | Add fireworks or sequential cascade reveals. |
