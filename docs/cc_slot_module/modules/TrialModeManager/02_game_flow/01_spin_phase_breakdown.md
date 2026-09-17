---
id: "cc_slot_module:TrialModeManager:game_flow:spin_phase_breakdown"
title: "TrialModeManager Game Flow Breakdown"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 TrialModeManager Game Flow Breakdown

<!-- convention-summary-start -->
### TrialModeManager Game Flow Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for TrialModeManager Game Flow Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Game Flow States

| State / Mode | TrialModeManager Action |
| :--- | :--- |
| **Normal Game (Real Money)** | Hidden (`trialModel.isPopupDisplay = false`). |
| **Trial Mode Entry** | Prompts scenario panel if `useSelectionPanel = true`. |
| **Scenario Executing** | Hides panel, runs selected script in slot reels. |
| **Trial Mode Exit** | Restores real wallet balance and returns to standard HUD. |
