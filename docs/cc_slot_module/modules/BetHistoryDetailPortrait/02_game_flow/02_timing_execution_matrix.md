---
id: "cc_slot_module:BetHistoryDetailPortrait:game_flow:timing_execution_matrix"
title: "BetHistoryDetailPortrait Timing Matrix"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "game_flow", "timing"]
---

# 📊 BetHistoryDetailPortrait Timing Matrix

<!-- convention-summary-start -->
### BetHistoryDetailPortrait Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BetHistoryDetailPortrait Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Next Respin** | `onNextRespinBtnClick()` | Emits `BET_DETAIL_RESPIN_NEXT_PAGE`. |
| **Prev Respin** | `onPreviousRespinBtnClick()`| Emits `BET_DETAIL_RESPIN_PREVIOUS_PAGE`. |
