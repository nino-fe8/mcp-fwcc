---
id: "cc_slot_mechanics:HorizontalReelModule:game_flow:timing_execution_matrix"
title: "HorizontalReelModule Timing & Execution Matrix"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "game_flow", "timing_matrix"]
---

# ⏱️ HorizontalReelModule Timing & Execution Matrix

<!-- convention-summary-start -->
### HorizontalReelModule Timing & Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for HorizontalReelModule Timing & Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_mechanics, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Execution Timing

| Trigger / Action | Caller | Target Method | State Impact |
| :--- | :--- | :--- | :--- |
| **Startup** | Engine | `onLoad()` / `start()` | Initializes pools & config |
| **Spin Start** | Director | Reset / Roll | Clears previous round data |
| **Feature Step** | ScriptExecutor | Mechanics Action | Animates VFX & modifies state |
