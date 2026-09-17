---
id: "cc_slot_module:WinEffectModule:game_flow:spin_phase_breakdown"
title: "WinEffectModule Execution Across Spin Loop Phases"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 WinEffectModule Execution Across Spin Loop Phases

<!-- convention-summary-start -->
### WinEffectModule Execution Across Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for WinEffectModule Execution Across Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | WinEffectModule Operations | Visual & Audio Changes |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Inactive (`active = false`). | Hidden. |
| **Phase 2: Reels Stopped** | Evaluates total round payout; triggers if $\text{winAmount} \ge \text{Big Win threshold}$. | Screen dims; BGM transitions to celebration fanfare. |
| **Phase 3: Roll & Escalation**| Number counts up over `animDuration` ($9\text{s}$); checks title changes. | Coin shower increases in intensity. |
| **Phase 4: Settlement** | Final amount formatted (`MoneyFormatter`); closes overlay. | Returns control to base game. |
