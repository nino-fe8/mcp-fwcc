---
id: "cc_slot_module:TurboButton:game_flow:spin_phase_breakdown"
title: "TurboButton Lifecycle Across Spin Phases"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 TurboButton Lifecycle Across Spin Phases

<!-- convention-summary-start -->
### TurboButton Lifecycle Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TurboButton Lifecycle Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Game Flow Breakdown

| Phase / State | TurboButton Behavior |
| :--- | :--- |
| **Idle Normal Game** | Interactable; toggle switches reel spin speed curves for subsequent spins. |
| **Reels Spinning** | Toggling instantly accelerates current spinning reels to quick-stop timing. |
| **Free Game Active** | Usually disabled or locked if game mode enforces fixed feature timings. |
