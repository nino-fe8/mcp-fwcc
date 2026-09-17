---
id: "cc_slot_module:WinAmountTooltipModule:game_flow:spin_phase_breakdown"
title: "WinAmountTooltipModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ WinAmountTooltipModule Spin Phase Breakdown

<!-- convention-summary-start -->
### WinAmountTooltipModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WinAmountTooltipModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

- **Phase 1 (Start Spin)**: `HIDE_TOOLTIP` event clears win amount and activates tip ticker.
- **Phase 4 (Win Presentation)**: Displays rolling win or total win amounts.
- **Phase 5 (Idle)**: Continues cycling through feature tip text banners.
