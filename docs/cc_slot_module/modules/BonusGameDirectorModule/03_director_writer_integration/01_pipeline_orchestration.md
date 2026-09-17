---
id: "cc_slot_module:BonusGameDirectorModule:director_writer:pipeline_orchestration"
title: "BonusGameDirectorModule Pipeline Orchestration & Script Delegation"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameDirectorModule Pipeline Orchestration & Script Delegation

<!-- convention-summary-start -->
### BonusGameDirectorModule Pipeline Orchestration & Script Delegation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Pipeline Orchestration & Script Delegation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Pipeline Integration Architecture

`BonusGameDirectorModule` operates in tandem with `BonusGameWriterModule`:
1. **Turn Result Presentation**: When backend data returns, `ScriptExecutor` invokes `BonusGameWriterModule.makeScriptShowResultEntry()`.
2. **Intermediate Reveal**: If `nextMode === BONUS_GAME`, the writer dispatches `_openItem`, `_unblockBonusGame`, and `_startCountDown`.
3. **Terminal Reveal**: If the feature ends, `makeScriptShowResultFinal()` dispatches `_stopCountDown`, `_openFinalItem`, `_openAllItems`, and `_playFinalResultEffect`.
