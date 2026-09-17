---
id: "cc_slot_module:CascadeModuleConfig:game_flow:timing_execution_matrix"
title: "CascadeModuleConfig Timing Execution Matrix"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ CascadeModuleConfig Timing Execution Matrix

<!-- convention-summary-start -->
### CascadeModuleConfig Timing Execution Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CascadeModuleConfig Timing Execution Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Constants

| Constant | Value (Normal Mode) | Value (Turbo / FTR Mode) | Purpose |
| :--- | :--- | :--- | :--- |
| `FALLING_TIME` | $0.4\text{s}$ ($0.2\text{s} \times 2$) | $0.2\text{s}$ | Duration of symbol gravity fall. |
| `DELAY_FALLING_TIME` | $0.2\text{s}$ | $0.2\text{s}$ | Near-win column suspension delay. |
| `CASCADING_TIME_COMPLETED` | $1.5\text{s}$ | $1.5\text{s}$ | Safety timeout budget per respin step. |
| `timeBouncing` | $0.3\text{s}$ | $0.1\text{s}$ | Overshoot bounce settling duration. |
