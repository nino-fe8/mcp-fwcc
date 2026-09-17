---
id: "cc_slot_module:PortraitBetModule:game_flow:spin_phase_breakdown"
title: "PortraitBetModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ PortraitBetModule Spin Phase Breakdown

<!-- convention-summary-start -->
### PortraitBetModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PortraitBetModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

- **Phase 1 (Spin Start)**: `disableBet()` executes, disabling `minBetBtn` and `maxBetBtn`.
- **Phase 2-4 (Reel Spin & Win)**: Buttons remain non-interactable.
- **Phase 5 (Idle)**: `onEnableBetChange(true)` re-enables boundary shortcut buttons.
