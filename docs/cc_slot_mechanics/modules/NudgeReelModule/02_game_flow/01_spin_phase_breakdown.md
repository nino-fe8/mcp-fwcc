---
id: "cc_slot_mechanics:NudgeReelModule:game_flow:spin_phase_breakdown"
title: "NudgeReelModule Spin Phase Breakdown"
category: "cc_slot_mechanics"
tags: ["NudgeReelModule", "nudge_reel_module", "cc_slot_mechanics", "game_flow", "spin_phases"]
---

# ⚡ NudgeReelModule Spin Phase Breakdown

<!-- convention-summary-start -->
### NudgeReelModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for NudgeReelModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_mechanics, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Phase Execution

1. **Spin Initialization**: Prepares internal buffers and resets active modifiers.
2. **Reel Spin & Stop**: Coordinates with table columns or auxiliary reels.
3. **Win Evaluation**: Evaluates paylines, cluster groups, or cash values.
4. **Feature Execution / Respin**: Performs cascades, sticky locks, nudges, or mystery morphs.
5. **Settlement**: Dispatches final payout data to UI and GameDataStore.
