---
id: "cc_slot_module:PaylineInfoModule:game_flow:timing_execution_matrix"
title: "PaylineInfoModule Timing Matrix"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ PaylineInfoModule Timing Matrix

<!-- convention-summary-start -->
### PaylineInfoModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineInfoModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Event | Execution Timing |
| :--- | :--- |
| `showPaylineInfo` | Synchronized with `PaylineLineModule` step duration ($1.0\text{s} - 2.0\text{s}$). |
| `hidePaylineInfo` | Instant on step transition. |
