---
id: "cc_slot_module:GameConfig:game_flow:spin_phase_breakdown"
title: "GameConfig Role Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["GameConfig", "gameconfig", "cc_slot_module", "game_flow", "spin_phases", "configuration", "bet", "win_level"]
---

# 🔄 GameConfig Role Across Spin Loop Phases

<!-- convention-summary-start -->
### GameConfig Role Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for GameConfig Role Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Breakdown Across the 5 Spin Loop Phases

| Spin Loop Phase | System Utilizing `GameConfig` | Exact Values Read | Impact on Phase Execution |
| :--- | :--- | :--- | :--- |
| **Phase 1: Bootstrap** | `GameInit` & `SlotTableModule` | `TABLE_FORMAT`, `SYMBOL_WIDTH`, `SYMBOL_HEIGHT` | Establishes grid geometry, reel columns, and viewport bounds. |
| **Phase 2: Spin Initiation**| `BetModule` & `WalletModule` | `PAY_SYSTEM`, `TOTAL_BET_CREDIT`, `DEFAULT_BET` | Calculates total wager amount deducted from wallet. |
| **Phase 3: Result Settle** | `SlotTableModule` & `SlotSymbolManager` | `SYMBOL_CONFIG` | Sorts symbol nodes by priority so Wilds/Scatters render on top. |
| **Phase 4: Fast Stop** | `TableModuleConfig` | `TABLE_FORMAT` | Coordinates fast-stop staggered delays per column. |
| **Phase 5: Celebration** | `GameDataStore` & `WinEffectModule` | `WIN_LEVEL_CONFIG` | Evaluates win-to-bet ratio to trigger level 1..4 win celebrations. |
