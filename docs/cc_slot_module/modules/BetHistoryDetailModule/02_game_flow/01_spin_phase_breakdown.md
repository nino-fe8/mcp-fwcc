---
id: "cc_slot_module:BetHistoryDetailModule:game_flow:spin_phase_breakdown"
title: "BetHistoryDetailModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ BetHistoryDetailModule Spin Phase Breakdown

<!-- convention-summary-start -->
### BetHistoryDetailModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BetHistoryDetailModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Replay Phasing

| Step Type | Visual Presentation | Data Rendered |
| :--- | :--- | :--- |
| **Normal Spin Step** | 2D matrix snapshot of symbols | Base bet, total win, hit paylines. |
| **Free Spin Step** | Free spin step index & active multiplier | Free round win amount + accumulative payout. |
| **Bonus Pick Step** | Grid of picked chests & reveal outcomes | Picked item prize, multiplier, end game state. |
| **Summary Step** | Total win across all spins & jackpot breakdown | Session ID, total wager, net returns. |
