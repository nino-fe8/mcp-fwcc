---
id: "cc_slot_module:FreeGameWriterModule:game_flow:timing_execution_matrix"
title: "FreeGameWriterModule Timing & Script Synthesis Matrix"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ FreeGameWriterModule Timing & Script Synthesis Matrix

<!-- convention-summary-start -->
### FreeGameWriterModule Timing & Script Synthesis Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for FreeGameWriterModule Timing & Script Synthesis Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Script Synthesis Matrix

| Script Generator Method | Commands Injected | Execution Duration |
| :--- | :--- | :--- |
| **`makeScriptResumeGameMode()`** | `_resumeFreeTable`, `_resumeWinAmount` | Instant (< 0.05ms) |
| **`makeScriptFreeSpinTrigger()`** | `_beforeSpinStart`, `_syncPlaySessionData`, `_resetOnSpin`, `_resetTable`, `_decreaseFreeGameSpinTimes` | Instant (< 0.05ms) |
| **`makeScriptShowResultFinal()`** | `_updateSpinTimes` OR `_showUnskippedCutscene(TOTAL_WIN)`, `_gameExit` | Instant (< 0.05ms) |
