---
id: "cc_slot_module:VerticalCascadeModule:game_flow:timing_execution_matrix"
title: "VerticalCascadeModule Timing Execution Matrix"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ VerticalCascadeModule Timing Execution Matrix

<!-- convention-summary-start -->
### VerticalCascadeModule Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for VerticalCascadeModule Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Matrix

| Operation | Mode | Duration (Normal) | Duration (Turbo) | Script Pipeline Blocking |
| :--- | :--- | :--- | :--- | :--- |
| **`startRespin`** | Synchronous | $< 2\text{ms}$ | $< 2\text{ms}$ | NO |
| **`stopRespin`** | Asynchronous | $1.5\text{s}$ (`CASCADING_TIME_COMPLETED`) | $1.5\text{s}$ | YES (Returns `Promise<void>`) |
| **`playFalling` (Individual Tween)** | Tween | $\sim 0.4\text{s}$ | $\sim 0.2\text{s}$ | Concurrent per column |
| **`resetAllEffectAndTasks`** | Synchronous | $< 1\text{ms}$ | $< 1\text{ms}$ | Immediate interrupt cancel |
