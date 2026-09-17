---
id: "cc_slot_module:NormalGameWriterModule:director_writer:pipeline_orchestration"
title: "NormalGameWriterModule Pipeline Orchestration & Engine Integration"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "director_writer", "pipeline", "orchestration"]
---

# 🎼 NormalGameWriterModule Pipeline Orchestration & Engine Integration

<!-- convention-summary-start -->
### NormalGameWriterModule Pipeline Orchestration & Engine Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Pipeline Orchestration & Engine Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Why Pure Synchronous Script Generation is Required

`NormalGameWriterModule` must remain **100% pure and synchronous**:

1. **Deterministic Action Lists**: When `ScriptExecutor.runAction()` is called, it requires the entire list of steps upfront so it can compute total durations, register skip hooks (`onResetScript`), and track execution indices.
2. **Zero Visual Side-Effects**: The writer does not directly manipulate nodes or mutate state variables. It simply builds command objects like `{ command: "_stopSpinningTable", data }`.
3. **Effortless Extensibility**: To insert a custom feature step (like Red Cliff's `_syncStackWild` or `_collectWildMultiplier`), you simply `.push({ command: "MY_STEP", data })` into the writer's return array!
