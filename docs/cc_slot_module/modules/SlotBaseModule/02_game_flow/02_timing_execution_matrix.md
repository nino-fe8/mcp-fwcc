---
id: "cc_slot_module:SlotBaseModule:game_flow:timing_execution_matrix"
title: "SlotBaseModule Timing Matrix"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SlotBaseModule Timing Matrix

<!-- convention-summary-start -->
### SlotBaseModule Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotBaseModule Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Lifecycle Timing

| Phase | Timing |
| :--- | :--- |
| `onLoad` & DI Injection | Instantaneous frame 0 execution ($0.0\text{s}$) |
| `setupModule` | Invoked during GameMode init before spin loops start |
| `resetAllEffectAndTasks` | Synchronous event trigger at the start of each spin cycle |
