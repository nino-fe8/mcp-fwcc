---
id: "cc_slot_module:PaylineInfoModule:game_flow:spin_phase_breakdown"
title: "PaylineInfoModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineInfoModule Execution Across Spin Phases

<!-- convention-summary-start -->
### PaylineInfoModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineInfoModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Phase Breakdown

| Phase / State | PaylineInfoModule Behavior |
| :--- | :--- |
| **Spin Start** | `hidePaylineInfo()` -> Deactivates toast node. |
| **Reels Rolling** | Inactive (`node.active = false`). |
| **Line Presentation** | Displays toast per winning line step, synchronized with `PaylineLineModule`. |
| **Idle Settle** | Displays toast during idle line looping. |
