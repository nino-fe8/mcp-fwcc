---
id: "cc_slot_module:BetHistoryDetailModule:inheritance:override_points_matrix"
title: "BetHistoryDetailModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 BetHistoryDetailModule Override Points Matrix

<!-- convention-summary-start -->
### BetHistoryDetailModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Table

| Extension Method | Safe to Override? | Required `super` Call | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Initialize custom pool sizes or additional child view nodes. |
| `updateGameModeInfo()`| `YES` | `MANDATORY` | Customize currency text and feature multipliers. |
| `onRenderDataView()` | `YES` | `MANDATORY` | Support custom mini-game replay panels. |
| `onDestroy()` | `YES` | `MANDATORY` | Release observer listeners and drain NodePool. |
