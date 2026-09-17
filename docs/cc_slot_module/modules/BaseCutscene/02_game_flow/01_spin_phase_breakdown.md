---
id: "cc_slot_module:BaseCutscene:game_flow:spin_phase_breakdown"
title: "BaseCutscene Modal Execution Across Spin Phases"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🔄 BaseCutscene Modal Execution Across Spin Phases

<!-- convention-summary-start -->
### BaseCutscene Modal Execution Across Spin Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for BaseCutscene Modal Execution Across Spin Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Spin Loop Phases

| Spin Phase | BaseCutscene Action | Impact on Background Systems |
| :--- | :--- | :--- |
| **Phase 1: Spin Start** | Idle (`active = false`). | Normal game reels and HUD active. |
| **Phase 2: Reels Stopped** | Triggered if win exceeds threshold or triggers mode transition. | Background dimmed; input events blocked via `SHOW_FULL_DISPLAY_CUTSCENE`. |
| **Phase 3: Celebration Loop** | `enter()` runs tweens, coin particles, audio. | Player can tap to skip. |
| **Phase 4: Exit & Settlement** | `exit()` fires callback, re-enables HUD inputs. | ScriptExecutor advances to next command. |
