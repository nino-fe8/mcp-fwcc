---
id: "cc_slot_module:SlotTableSoundEffectModule:game_flow:spin_phase_breakdown"
title: "SlotTableSoundEffectModule Spin Phase Audio Breakdown"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 SlotTableSoundEffectModule Spin Phase Audio Breakdown

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Spin Phase Audio Breakdown Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SlotTableSoundEffectModule Spin Phase Audio Breakdown.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Phase Breakdown Across Spin Loop

1. **Spin Start**: `REEL_START_SOUND` is received, resetting internal counters `countScatter = 0`, `countBonus = 0`, and `countJackpot = 0`.
2. **Reel Spinning**: Silent while reel loop SFX is managed by `SlotTableModule` / `SlotSoundPlayerModule`.
3. **Reel Landing**: `REEL_STOP_SOUND` inspects column symbols. If a special symbol lands, plays escalating ladder SFX (`SCATTER_1` .. `SCATTER_5`); otherwise plays standard click (`REEL_STOP`).
4. **Fast-To-Result & Turbo Compression**: In Turbo mode or FTR, all intermediate stop clicks are suppressed; only reel index $N-1$ plays `REEL_STOP`.
5. **Win Settlement**: Audio transitions to payline celebratory audio or Big Win cutscene choreography.
