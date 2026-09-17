---
id: "cc_slot_module:PaylineWinFrameModule:game_flow:spin_phase_breakdown"
title: "PaylineWinFrameModule Spin Phase Breakdown"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 PaylineWinFrameModule Spin Phase Breakdown

<!-- convention-summary-start -->
### PaylineWinFrameModule Spin Phase Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for PaylineWinFrameModule Spin Phase Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Win Frame States Across Phases

1. **Spinning**: All frames returned to `winFramePool` or hidden.
2. **Win Presentation (Blink All)**: Frames spawn at all winning coordinate boxes and play looping border VFX.
3. **Sequential Cycling**: Non-current line frames are hidden via `HIDE`; current line's frames play active animation.
4. **Next Spin Reset**: `PAYLINE_CLEAR` sends `RESET` to frame nodes and puts them back in `winFramePool`.
