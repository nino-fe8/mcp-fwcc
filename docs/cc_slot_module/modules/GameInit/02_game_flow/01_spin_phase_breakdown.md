---
id: "cc_slot_module:GameInit:game_flow:spin_phase_breakdown"
title: "GameInit Role Across the 5 Spin Loop Phases"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "game_flow", "spin_phases", "bootstrap", "spin_loop"]
---

# 🔄 GameInit Role Across the 5 Spin Loop Phases

<!-- convention-summary-start -->
### GameInit Role Across the 5 Spin Loop Phases Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for GameInit Role Across the 5 Spin Loop Phases.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Overview of Phase Participation

Because `GameInit` is the foundational bootstrap controller, its primary execution occurs before Phase 1. However, the singletons instantiated and provided by `GameInit` directly power every subsequent spin phase:

| Spin Loop Phase | GameInit / Service Involvement | Key Responsibilities |
| :--- | :--- | :--- |
| **Phase 0: Bootstrap & Auth** | `GameInit.onLoad()`, `GameInit.start()` | Instantiates `GameLogic`, provides IoC singletons, authenticates socket session with server. |
| **Phase 1: Spin Initiation** | `GameEventManager` & `Scheduler` (provided by `GameInit`) | Dispatches `SPIN_START` global event, starts spin duration timer via `_scheduler`. |
| **Phase 2: Matrix Presentation** | `GameDataStore` (configured by `GameInit`) | Receives spin response packet from network, parses payout matrix and win lines. |
| **Phase 3: Celebration & FX** | `SlotSoundPlayerModule` & `MoneyTween` | Plays win sounds, triggers counting animations and big win cutscenes. |
| **Phase 4: Fast Stop & Reset** | `GameLogic` (instantiated by `GameInit`) | Listens to `RESET_ALL_EFFECT_AND_TASKS` on Turbo/FTR skip to abort active tweens. |
| **Phase 5: Settlement & Balance** | `MoneyFormatter` & `GameDataStore` | Formats final payout text and commits wallet balance updates. |
