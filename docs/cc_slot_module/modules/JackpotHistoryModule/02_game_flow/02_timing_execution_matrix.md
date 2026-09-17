---
id: "cc_slot_module:JackpotHistoryModule:game_flow:timing_execution_matrix"
title: "JackpotHistoryModule Timing Matrix"
category: "cc_slot_module"
tags: ["JackpotHistoryModule", "jackpothistorymodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 JackpotHistoryModule Timing Matrix

<!-- convention-summary-start -->
### JackpotHistoryModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for JackpotHistoryModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **Open Panel** | User Click | `onShowJackpotHistory(true)` | `currentIsActive = true` |
| **Data Ingestion**| Logic Callback | `onShowRecordView(data)` | `recordView` populated |
| **Next Page** | User Click | `onNextPage()` | Emits `REQUEST_JACKPOT_NEXT_PAGE` |
| **Close** | User Click | `onClose()` | `currentIsActive = false` |
