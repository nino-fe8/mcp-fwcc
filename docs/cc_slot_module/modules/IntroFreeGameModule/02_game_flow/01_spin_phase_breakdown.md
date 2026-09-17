---
id: "cc_slot_module:IntroFreeGameModule:game_flow:spin_phase_breakdown"
title: "IntroFreeGameModule Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["IntroFreeGameModule", "intro_free_game_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 IntroFreeGameModule Execution Across Spin Phases

<!-- convention-summary-start -->
### IntroFreeGameModule Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for IntroFreeGameModule Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | IntroFreeGameModule Status | Purpose |
| :--- | :--- | :--- |
| **Phase 1: Normal Spin** | Inactive (`active = false`). | Hidden. |
| **Phase 2: Free Game Trigger**| Scatter hits evaluate $\ge 3$. | Invoked via `PLAY_CUTSCENE` to show Free Spin awards. |
| **Phase 3: Countdown** | Active for `timeShow` ($2\text{s}$). | Audio transition fanfare plays. |
| **Phase 4: Mode Switch** | Calls `exit()`. | Game switches active background to Free Game theme. |
