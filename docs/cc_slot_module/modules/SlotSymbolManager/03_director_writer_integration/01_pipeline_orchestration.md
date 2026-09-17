---
id: "cc_slot_module:SlotSymbolManager:director_writer:pipeline_orchestration"
title: "SlotSymbolManager Director & Writer Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotSymbolManager Director & Writer Pipeline Orchestration

<!-- convention-summary-start -->
### SlotSymbolManager Director & Writer Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Director & Writer Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Interaction with Table & Paylines

1. **Table Configuration Ingestion**: During `onLoadExtend`, `SlotTableModule` calls `symbolManager.setGameConfig(this.gameConfig)`, mapping `gameConfig.SYMBOL_CONFIG[key].Priority` into `layerConfig`.
2. **Reel Column Symbol Borrowing**: As `SlotReelModule` instantiates or scrolls, it requests static and blur symbols through `createSymbol()` and `createBlurSymbol()`.
3. **Payline Z-Order Normalization**: When `SlotTablePaylineModule` highlights a winning combination, it calls `updateSymbolSiblingIndex()` so high-value symbols render cleanly above lower-tier pay symbols.
