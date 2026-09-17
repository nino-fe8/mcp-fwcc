---
id: "cc_slot_module:GameModeWriterModule:overview:lifecycle_flowchart"
title: "GameModeWriterModule Script Generation Flowchart"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 GameModeWriterModule Script Generation Flowchart

<!-- convention-summary-start -->
### GameModeWriterModule Script Generation Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule Script Generation Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Declarative Generation Flowchart

```mermaid
graph TD
    Exec[ScriptExecutor.runAction 'StopSpinningTable'] --> Call[writer.makeScriptStopSpinningTable data]
    Call --> Pure[Assemble Synchronous Array of Command Descriptors]
    Pure --> Ret["Return [{ command: '_stopSpinningTable' }, { command: '_setUpPaylines' }]"]
    Ret --> StepLoop[ScriptExecutor executes steps asynchronously on Director]
```
