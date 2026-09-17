---
id: "cc_slot_module:SlotTableNearWinModule:inheritance:override_points_matrix"
title: "SlotTableNearWinModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTableNearWinModule Override Points Matrix

<!-- convention-summary-start -->
### SlotTableNearWinModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Matrix

| Extension Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `extendInit()` | Empty virtual method | `YES` | None | Initializing custom particle emitters or light trails. |
| `_canWinFree(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Scatter trigger conditions (Anywhere/Payways). |
| `_canWinBonus(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Bonus game conditions. |
| `_canWinJP(col)` | Contiguous left-to-right logic | `YES` | Optional | Custom Jackpot line validation. |
| `_getXPosition(col)` | Standard column offset formula | `YES` | Optional | Non-uniform reel column spacing. |
| `resetNearWin()` | Stops Spine & audio | `YES` | `MANDATORY` | Cleaning up custom particles or screen shake tweens. |
