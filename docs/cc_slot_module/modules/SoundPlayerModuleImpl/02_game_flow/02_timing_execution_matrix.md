---
id: "cc_slot_module:SoundPlayerModuleImpl:game_flow:timing_execution_matrix"
title: "SoundPlayerModuleImpl Timing Matrix"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "game_flow", "timing_matrix"]
---

# ⏱️ SoundPlayerModuleImpl Timing Matrix

<!-- convention-summary-start -->
### SoundPlayerModuleImpl Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SoundPlayerModuleImpl Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Phase | Method | Impact |
| :--- | :--- | :--- |
| **Scene Start** | `playMainBGM()` | Starts base game background music loop |
| **Spin Start** | `playSfx("SPIN_START")` | Triggers start sound |
| **Reel Stop** | `playSfx("REEL_STOP")` | Plays reel stopping latch effect |
| **Win Celebration** | `playMusic("WIN_BIG")` | Crossfades to win music track |
| **Fast Stop / FTR** | `stopAllEffects()` | Halts all active sound effects instantly |
