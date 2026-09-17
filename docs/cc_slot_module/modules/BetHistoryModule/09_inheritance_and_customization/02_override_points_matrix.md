---
id: "cc_slot_module:BetHistoryModule:inheritance:override_points_matrix"
title: "BetHistoryModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 BetHistoryModule Override Points Matrix

<!-- convention-summary-start -->
### BetHistoryModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Hooks

| Extension Method | Safe to Override? | Required `super` Call | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Initialize custom child views and custom pagination sizing. |
| `setupObserver()` | `YES` | `MANDATORY` | Watch additional game-specific custom history fields. |
| `onRecordDataChange()` | `YES` | `MANDATORY` | Format custom currency formats or promotional free spin tags. |
| `onDestroy()` | `YES` | `MANDATORY` | Release custom model observers. |
