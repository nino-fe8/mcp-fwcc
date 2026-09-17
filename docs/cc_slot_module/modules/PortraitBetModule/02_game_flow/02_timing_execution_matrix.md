---
id: "cc_slot_module:PortraitBetModule:game_flow:timing_execution_matrix"
title: "PortraitBetModule Timing Matrix"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "game_flow", "timing"]
---

# 📊 PortraitBetModule Timing Matrix

<!-- convention-summary-start -->
### PortraitBetModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PortraitBetModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Matrix

| Action | Method | Result |
| :--- | :--- | :--- |
| **Max Bet Click** | `onMaxBetClick()` | Emits `HIT_MAX_BET` toast. |
| **Min Bet Click** | `onMinBetClick()` | Emits `HIT_MIN_BET` toast. |
| **Spin Start** | `disableBet()` | `minBetBtn.interactable = false`, `maxBetBtn.interactable = false`. |
