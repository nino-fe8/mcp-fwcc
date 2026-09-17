---
id: "cc_slot_module:SymbolPaytableViewer:game_flow:spin_phase_breakdown"
title: "SymbolPaytableViewer Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "game_flow", "spin_phases"]
---

# ⏱️ SymbolPaytableViewer Spin Phase Breakdown

<!-- convention-summary-start -->
### SymbolPaytableViewer Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SymbolPaytableViewer Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Behavior Across Phases

- **Phase 1 (Start Spin)**: Automatically dismisses callout via `hideSymbolInfo()`.
- **Phase 2-4 (Reel Spin & Win)**: Touch interactions ignored while `currentGameState !== GAME_STATE_ENUM.IDLE`.
- **Phase 5 (Idle)**: Touch interactions enabled.
