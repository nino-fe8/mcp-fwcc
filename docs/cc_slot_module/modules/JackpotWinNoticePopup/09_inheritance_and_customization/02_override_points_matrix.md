---
id: "cc_slot_module:JackpotWinNoticePopup:inheritance:override_points_matrix"
title: "JackpotWinNoticePopup Override Points Matrix"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 JackpotWinNoticePopup Override Points Matrix

<!-- convention-summary-start -->
### JackpotWinNoticePopup Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `showInfo()` | `YES` | `MANDATORY` | Custom typography and Spine animations. |
| `onDestroy()`| `YES` | `MANDATORY` | Timer and observer cleanup. |
