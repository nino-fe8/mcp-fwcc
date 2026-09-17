---
id: "cc_slot_module:BetSelectionPanel:game_flow:timing_execution_matrix"
title: "BetSelectionPanel Timing Matrix"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 BetSelectionPanel Timing Matrix

<!-- convention-summary-start -->
### BetSelectionPanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BetSelectionPanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Duration |
| :--- | :--- | :--- |
| **Scroll Sync** | `onScrollToBetId()` | `scrollTime (0.15s)` tween. |
| **Max Bet Jump**| `onSelectMaxBet()` | `scrollTime (0.15s)` scroll to last index. |
| **Confirm** | `onConfirmBet()` | Emits `UPDATE_BET_ID` and closes immediately. |
