---
id: "cc_slot_module:CascadeModuleConfig:game_flow:spin_phase_breakdown"
title: "CascadeModuleConfig Parameters Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CascadeModuleConfig Parameters Across Spin Loop Phases

<!-- convention-summary-start -->
### CascadeModuleConfig Parameters Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CascadeModuleConfig Parameters Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Parameter Access Matrix

| Spin Phase | Accessed Parameter | Usage |
| :--- | :--- | :--- |
| **Initial Spin Start** | `CASCADE_TABLE_CONFIG` | Grid format geometry initialization. |
| **Cascade Evaluation** | `DROP_SYMBOL_CODE` (`'-1'`) | Marking eliminated symbols from `traceWay`. |
| **Cascade Tumble Drop**| `FALLING_TIME`, `DELAY_FALLING_TIME` | Calculating tween durations and near-win pauses. |
| **Cascade Step Resolution**| `CASCADING_TIME_COMPLETED` | Safety timeout for `scheduleOnce` callback. |
