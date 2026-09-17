---
id: "cc_slot_module:AutoSpinPanel:game_flow:timing_execution_matrix"
title: "AutoSpinPanel Timing Matrix"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 AutoSpinPanel Timing Matrix

<!-- convention-summary-start -->
### AutoSpinPanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for AutoSpinPanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Method | Result |
| :--- | :--- | :--- |
| **Open** | `onAutoSpinPanelOpen(true)` | Slides up from bottom. |
| **Select Number** | `onSelectAutoSpin(index)` | Updates highlight state. |
| **Start** | `onStartAutoSpin()` | Emits `START_AUTO_SPIN` and closes panel. |
