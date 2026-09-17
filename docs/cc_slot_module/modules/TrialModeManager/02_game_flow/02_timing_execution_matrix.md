---
id: "cc_slot_module:TrialModeManager:game_flow:timing_execution_matrix"
title: "TrialModeManager Timing Matrix"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ TrialModeManager Timing Matrix

<!-- convention-summary-start -->
### TrialModeManager Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TrialModeManager Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Configuration

| Event | Execution Duration |
| :--- | :--- |
| Panel Open / Close | Immediate or $0.3\text{s}$ tween |
| `onSkipPressed` | Immediate ($0.0\text{s}$) |
