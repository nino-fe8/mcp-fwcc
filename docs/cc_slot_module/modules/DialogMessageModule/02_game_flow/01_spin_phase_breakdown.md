---
id: "cc_slot_module:DialogMessageModule:game_flow:spin_phase_breakdown"
title: "DialogMessageModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ DialogMessageModule Spin Phase Breakdown

<!-- convention-summary-start -->
### DialogMessageModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for DialogMessageModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

If active during any spin phase (Phases 1-5), `DialogMessageModule` immediately overlays a full-screen input blocker, halting further user spin dispatches until the player acknowledges the modal.
