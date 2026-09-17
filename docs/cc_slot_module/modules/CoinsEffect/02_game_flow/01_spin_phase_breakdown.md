---
id: "cc_slot_module:CoinsEffect:game_flow:spin_phase_breakdown"
title: "CoinsEffect State Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 CoinsEffect State Across Spin Loop Phases

<!-- convention-summary-start -->
### CoinsEffect State Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for CoinsEffect State Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | CoinsEffect Status | Particle State |
| :--- | :--- | :--- |
| **Phase 1: Spin Roll** | Inactive (`active = false`). | Particles stopped, opacity 0. |
| **Phase 2: Big Win Trigger**| `SHOW_COINS_EFFECT` received. | Particles active, falling coins shower. |
| **Phase 3: Celebration End**| `HIDE_COINS_EFFECT` received. | `stopSystem()` called, particle emission halts. |
