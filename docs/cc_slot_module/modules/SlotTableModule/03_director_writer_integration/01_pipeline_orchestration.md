---
id: "cc_slot_module:SlotTableModule:director_writer:pipeline_orchestration"
title: "SlotTableModule Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTableModule", "slot_table", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTableModule Director & Writer Pipeline Orchestration

<!-- convention-summary-start -->
### SlotTableModule Director & Writer Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableModule Director & Writer Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Triad Collaboration Pattern

1. **Spin Command Dispatch**: `NormalGameWriterModule` outputs `{ command: "_startSpinningTable" }`, prompting `NormalGameDirectorModule` to emit `TABLE_START_SPIN` to `SlotTableModule`.
2. **Result Command Dispatch**: `_stopSpinningTable` outputs `{ command: "_stopSpinningTable" }`. The director awaits `this.tableModule.stopSpin(matrix)` Promise before moving to win evaluation.
3. **Reconnection Recovery**: `_resumeNormalTable` emits `SYNC_TABLE` to rebuild column symbols without running spin animations.
