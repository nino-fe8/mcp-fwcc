---
id: "cc_slot_module:MenuPanel:game_flow:timing_execution_matrix"
title: "MenuPanel Timing Matrix"
category: "cc_slot_module"
tags: ["MenuPanel", "menupanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 MenuPanel Timing Matrix

<!-- convention-summary-start -->
### MenuPanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for MenuPanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Toggle BGM** | `toggleMusic()` | Emits `TOGGLE_BGM` |
| **Toggle SFX** | `toggleSFX()` | Emits `TOGGLE_SFX` |
| **Show Paytable** | `onShowPaytable()` | Emits `OPEN_PAY_TABLE_PANEL` |
| **Show Info** | `onShowInfo()` | Emits `OPEN_INFO_PANEL` |
| **Show History** | `onShowBetHistory()`| Emits `OPEN_BET_HISTORY_PANEL` |
