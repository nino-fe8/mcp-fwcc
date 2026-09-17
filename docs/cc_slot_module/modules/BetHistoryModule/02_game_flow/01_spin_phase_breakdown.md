---
id: "cc_slot_module:BetHistoryModule:game_flow:spin_phase_breakdown"
title: "BetHistoryModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ BetHistoryModule Spin Phase Breakdown

<!-- convention-summary-start -->
### BetHistoryModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BetHistoryModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Spin Phases

| Spin Phase | Active State | Behavior Description |
| :--- | :--- | :--- |
| **Phase 1: Spin Request** | Inactive / Locked | If popup is open when auto-spin or spin triggers, popup stays in background or blocks input depending on modal policy. |
| **Phase 2: Matrix Roll** | Inactive | No background polling during active reel spin to preserve render performance. |
| **Phase 3: Stop & Evaluate**| Inactive | History records are not yet written to server backend. |
| **Phase 4: Win Presentation**| Inactive | Backend persists round data upon settlement. |
| **Phase 5: Idle & Settled** | Active / Available| Player can open BetHistory; latest round is fetched upon modal open. |
