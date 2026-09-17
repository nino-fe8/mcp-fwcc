---
id: "cc_slot_module:TableModuleConfig:director_writer:pipeline_orchestration"
title: "TableModuleConfig Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["TableModuleConfig", "table_config", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 TableModuleConfig Director & Writer Pipeline Orchestration

<!-- convention-summary-start -->
### TableModuleConfig Director & Writer Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TableModuleConfig Director & Writer Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Grid Configuration Pipeline

1. **Table Dimension Query**: At initialization, `SlotTableModule` reads `config.TABLE_FORMAT` and `config.SYMBOL_WIDTH` to instantiate reels and set positions.
2. **Index Generation for Paylines**: `SlotTablePaylineModule` queries `config.SYMBOL_INDEXES` to map server line coordinate matrices (e.g. `[1, 1, 1, 1, 1]`) to linear symbol indices (`[1, 4, 7, 10, 13]`).
3. **Speed Profile Selection**: When `SlotTableModule.startSpin()` runs, it selects between `config.MODES.NORMAL` and `config.MODES.TURBO` based on `SlotGameSettings.isTurboActive`.
