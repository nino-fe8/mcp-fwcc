---
id: "cc_slot_module:BonusGameWriterModule:director_writer:pipeline_orchestration"
title: "BonusGameWriterModule Director-Writer Triad Orchestration"
category: "cc_slot_module"
tags: ["BonusGameWriterModule", "bonus_game_writer", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BonusGameWriterModule Director-Writer Triad Orchestration

<!-- convention-summary-start -->
### BonusGameWriterModule Director-Writer Triad Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameWriterModule Director-Writer Triad Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Triad Collaboration Pattern

1. **State Inspection**: `BonusGameWriterModule` reads `this.dataStore.playSession.nextMode` directly from `GameDataStore`.
2. **Deterministic Script Assembly**: Constructs plain JSON array of `{ command: string, data?: any }` steps.
3. **Execution Dispatch**: `BonusGameDirectorModule` passes the script to `ScriptExecutor.run()` to sequentially call internal underscore methods (`_openItem`, `_openAllItems`, etc.).
