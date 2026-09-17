---
id: "cc_slot_module:JackpotHistoryModule:inheritance:override_points_matrix"
title: "JackpotHistoryModule Override Points Matrix"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 JackpotHistoryModule Override Points Matrix

<!-- convention-summary-start -->
### JackpotHistoryModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotHistoryModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend()` | `YES` | `MANDATORY` | Custom tier filters and pagination limits. |
| `onShowRecordView()` | `YES` | `MANDATORY` | Custom timestamp or VIP avatar formatting. |
