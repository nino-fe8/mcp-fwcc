---
id: "cc_slot_module:BaseDataModule:director_writer:pipeline_orchestration"
title: "BaseDataModule Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["BaseDataModule", "base_data_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 BaseDataModule Director & Writer Pipeline Orchestration

<!-- convention-summary-start -->
### BaseDataModule Director & Writer Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseDataModule Director & Writer Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. State Ingestion Pipeline

1. **Server Ingestion Step**: When `Director.onStateUpdate(data)` executes, it delegates parsing to `this.dataStore.parseDataPS(data)`.
2. **Module Data Trigger**: `this.dataStore.updateDataModules()` iterates over every active `BaseDataModule`, matching keys in `playSession` with `module.registeredKeys`.
3. **Action Execution**: When Writers run action scripts (`_showWinPayline`, `_stopSpinningTable`), UI components query their local `BaseDataModule` instance to obtain sanitized, parsed domain objects.
