---
id: "cc_slot_module:GameModeWriterModule:game_flow:spin_phase_breakdown"
title: "GameModeWriterModule Spin Pipeline Phasing"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "game_flow", "spin_phases"]
---

# 🌀 GameModeWriterModule Spin Pipeline Phasing

<!-- convention-summary-start -->
### GameModeWriterModule Spin Pipeline Phasing Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for GameModeWriterModule Spin Pipeline Phasing.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Declarative Phasing Pipeline

Every action triggered by the director maps to a dedicated generator method on `GameModeWriterModule`:

| Action Trigger | Generator Method | Emitted Commands |
| :--- | :--- | :--- |
| **`StartSpinning`** | `makeScriptStartSpinning()` | `_startSpinningTable` |
| **`PreStopSpinningTable`** | `makeScriptPreStopSpinningTable()` | `_syncJackpot`, `_playSureWinEffect`, `_playPreStopSpinningEffect` |
| **`StopSpinningTable`** | `makeScriptStopSpinningTable()` | `_stopSpinningTable`, `_setUpPaylines` |
| **`StartRespinning`** | `makeScriptStartRespinning()` | `_beforeReSpinStart`, `_showStartRespinEffect`, `_startRespinningTable` |
| **`StopRespinningTable`** | `makeScriptStopRespinningTable()` | `_showRespinResultEntry`, `_stopRespinningTable`, `_setUpPaylines`, `_showRespinResultFinal` |
| **`ShowResultEntry`** | `makeScriptShowResultEntry()` | `_playJackpotWin`, `_showResultEntry`, `_showTransitionGameMode` |
| **`StopCurrentGameMode`** | `makeScriptStopCurrentGameMode()` | `_stopCurrentGameMode`, `_forceResetGameMode` |
