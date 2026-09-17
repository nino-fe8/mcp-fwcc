---
id: "cc_slot_module:SlotSymbolManager:properties:injected_services"
title: "SlotSymbolManager Injected Services"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SlotSymbolManager Injected Services

<!-- convention-summary-start -->
### SlotSymbolManager Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Property Reference | Role |
| :--- | :--- | :--- |
| **`GameConfig`** | `this.gameConfig` (passed via `setGameConfig()`) | Ingests `SYMBOL_CONFIG` to build `layerConfig` priority map. |
| **`TableModuleConfig`** | Sibling component | Defines `TABLE_FORMAT` and `SYMBOL_INDEXES` grid layout. |
