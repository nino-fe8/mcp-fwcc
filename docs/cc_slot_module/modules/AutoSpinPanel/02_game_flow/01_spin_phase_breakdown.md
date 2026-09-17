---
id: "cc_slot_module:AutoSpinPanel:game_flow:spin_phase_breakdown"
title: "AutoSpinPanel Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ AutoSpinPanel Spin Phase Breakdown

<!-- convention-summary-start -->
### AutoSpinPanel Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for AutoSpinPanel Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

`AutoSpinPanel` is accessible in idle state (Phase 5). When auto-spin is triggered, the panel closes and the bottom HUD transforms into Auto Spin mode with a remaining round count badge.
