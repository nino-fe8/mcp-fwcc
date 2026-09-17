---
id: "cc_slot_module:SlotButtonModule:game_flow:spin_phase_breakdown"
title: "SlotButtonModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["SlotButtonModule", "slot_button_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 SlotButtonModule Execution Across Spin Phases

<!-- convention-summary-start -->
### SlotButtonModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotButtonModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | SlotButtonModule Action | Subsystem Coordination |
| :--- | :--- | :--- |
| **Phase 1: Ready / Idle** | `state = NORMAL`. Spacebar and touch inputs armed. | Waiting for player input. |
| **Phase 2: Spin In Flight** | `state = SPINNING`. Click switches to `FAST_STOP` or `STOP_BUTTON_NORMAL_CLICKED`. | Triggers reel deceleration. |
| **Phase 3: Settle** | `state = DISABLE`. Temporarily ignores repeated input. | Allows payouts to calculate. |
| **Phase 4: Settle Complete** | `state = NORMAL`. Restores touch interactability. | Dashboard re-armed. |
