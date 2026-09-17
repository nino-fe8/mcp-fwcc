---
id: "cc_slot_module:GameDataStore:director_writer:pipeline_orchestration"
title: "GameDataStore Integration with Directors and Writers"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 GameDataStore Integration with Directors and Writers

<!-- convention-summary-start -->
### GameDataStore Integration with Directors and Writers Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore Integration with Directors and Writers.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Pipeline Integration Points

1. **State Ingestion Phase**: Director calls `dataStore.parseDataPS(data)` and `dataStore.updateDataModules()` at the start of `onStateUpdate()` or `onStateResume()`.
2. **Writer Script Synthesis Phase**: Writers (`NormalGameWriterModule`, `FreeGameWriterModule`, `BonusGameWriterModule`) inject `this.dataStore` to inspect `dataStore.playSession.freeGameRemain`, `dataStore.playSession.isBigWin`, or `dataStore.playSession.jackpot` to dynamically generate conditional action script queues.
3. **Execution Phase**: Directors query helper methods (`getBigWinData()`, `getJackpotInfo()`, `getWinAmountInfo()`) to feed exact parameters into Cutscene UI dialogs.
