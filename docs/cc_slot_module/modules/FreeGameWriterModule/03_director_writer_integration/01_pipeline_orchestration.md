---
id: "cc_slot_module:FreeGameWriterModule:director_writer:pipeline_orchestration"
title: "FreeGameWriterModule Director & Script Executor Pipeline Orchestration"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 FreeGameWriterModule Director & Script Executor Pipeline Orchestration

<!-- convention-summary-start -->
### FreeGameWriterModule Director & Script Executor Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Director & Script Executor Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Pipeline Relationship

`FreeGameWriterModule` acts as the deterministic planning brain of Free Spins:
1. It queries `GameDataStore.playSession.freeGameRemain`.
2. Generates pure data command descriptors (`{ command: "_updateSpinTimes", data: 5 }`).
3. Passes arrays to `FreeGameDirectorModule.runAction()`, which forwards steps to `ScriptExecutor`.
