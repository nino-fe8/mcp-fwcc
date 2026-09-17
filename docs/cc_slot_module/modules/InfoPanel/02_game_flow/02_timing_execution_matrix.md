---
id: "cc_slot_module:InfoPanel:game_flow:timing_execution_matrix"
title: "InfoPanel Timing Matrix"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 InfoPanel Timing Matrix

<!-- convention-summary-start -->
### InfoPanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for InfoPanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Invoker | Method | Animation |
| :--- | :--- | :--- | :--- |
| **Next Page** | User Click | `next()` | `pageView.scrollToPage(id + 1, 0)` |
| **Prev Page** | User Click | `previous()`| `pageView.scrollToPage(id - 1, 0)` |
| **Page Swipe**| Touch Drag | `pageViewEvent()`| PageView page-turning event. |
