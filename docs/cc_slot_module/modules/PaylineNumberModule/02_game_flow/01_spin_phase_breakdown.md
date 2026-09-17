---
id: "cc_slot_module:PaylineNumberModule:game_flow:spin_phase_breakdown"
title: "PaylineNumberModule Behavior Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 PaylineNumberModule Behavior Across Spin Loop Phases

<!-- convention-summary-start -->
### PaylineNumberModule Behavior Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineNumberModule Behavior Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Phase Matrix

| Spin Phase | Operations | Visual Badge State |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | `hideAll()` executed on `PAYLINE_CLEAR`. | All side line numbers hidden/unlit. |
| **Phase 2: Reels Spinning** | Idle state. | Badges remain unlit. |
| **Phase 3: Reels Stopped** | `setupPaylines()` saves winning payload. | Prepared for presentation. |
| **Phase 4: Win Presentation (Stage 1)** | `blinkAllPayLines()` lights up numbers for all winning lines. | All winning line numbers glowing simultaneously. |
| **Phase 5: Idle Cycle (Stage 2)** | `showPayLine()` clears badges and lights up only the active cycling line. | Only the currently presented payline number is lit. |
