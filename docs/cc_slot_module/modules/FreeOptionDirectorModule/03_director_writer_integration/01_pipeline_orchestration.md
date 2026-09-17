---
id: "cc_slot_module:FreeOptionDirectorModule:director_writer:pipeline_orchestration"
title: "FreeOptionDirectorModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 FreeOptionDirectorModule Pipeline Orchestration

<!-- convention-summary-start -->
### FreeOptionDirectorModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Pipeline Orchestration

1. Triggered from Base Game via Director's `transitionGameMode(GAME_MODE_ENUM.FREE_OPTION)`.
2. When the player or auto-timer selects an option, `FreeOptionDirectorModule` emits `GameLogicUIEvents.SEND_FREE_OPTION_REQUEST`.
3. Server processes choice and returns the new spin payload.
4. Director intercepts response and transitions into `FreeGameDirectorModule` with configured volatility parameters.
