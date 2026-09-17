---
id: "cc_slot_module:NormalGameDirectorModule:director_writer:pipeline_orchestration"
title: "NormalGameDirectorModule Subsystem Orchestration & Integration"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "director_writer", "pipeline", "orchestration", "subsystems"]
---

# 🎼 NormalGameDirectorModule Subsystem Orchestration & Integration

<!-- convention-summary-start -->
### NormalGameDirectorModule Subsystem Orchestration & Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Subsystem Orchestration & Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Interaction with Companion Writer & Visual Subsystems

`NormalGameDirectorModule` operates through tight coupling with `NormalGameWriterModule`:

1. **Pre-Spin Sanitation**:
   * Calls `_pauseWallet()` to ensure player balance does not fluctuate while reels turn.
   * Calls `_clearWinAmount()` to fade out previous payout figures.
   * Emits `BEFORE_RESET_TABLE`, `CLEAR_PAYLINES`, `SYNC_TABLE` to ensure clean initial visual state.
2. **Reel Stop & Symbol Landing**:
   * Invokes `_stopSpinningTable(data)` to broadcast `TABLE_STOP_SPIN`.
   * Invokes `_setUpPaylines(data)` to calculate winning payline coordinates on the table.
3. **Respin Handling**:
   * Supports `_startRespinningTable` and `_stopRespinningTable` for cascade or locking-wild mechanics.
4. **Round Settlement**:
   * Invokes `_resumeWallet()` when `playSession.isFinished` is confirmed, unlocking player bet interactions.
