---
id: "cc_slot_module:InfoPanel:game_flow:spin_phase_breakdown"
title: "InfoPanel Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ InfoPanel Spin Phase Breakdown

<!-- convention-summary-start -->
### InfoPanel Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for InfoPanel Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

`InfoPanel` is a static paytable viewer accessible in idle state (Phase 5). When open, player inputs to the underlying reel matrix are blocked.
