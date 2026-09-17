---
id: "cc_slot_module:SlotSymbolManager:properties:runtime_state_variables"
title: "SlotSymbolManager Runtime State Variables"
category: "cc_slot_module"
tags: ["SlotSymbolManager", "slot_symbol_manager", "cc_slot_module", "properties", "runtime_state"]
---

# 💾 SlotSymbolManager Runtime State Variables

<!-- convention-summary-start -->
### SlotSymbolManager Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolManager Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Runtime State Reference Table

| Variable Name | TypeScript Type | Default Value | Mutated By | Role |
| :--- | :--- | :--- | :--- | :--- |
| **`symbolPool`** | `cc.NodePool` | `null` | `initSymbolPool()`, `getSymbolFromPool()`, `removeSymbol()` | In-memory instance pool for recycling symbol nodes. |
| **`usingSymbols`**| `cc.Node[]` | `[]` | `getSymbol()`, `removeSymbol()` | Active list of symbol nodes currently in use across the table. |
| **`layerConfig`** | `Record<string, number>` | `{}` | `setGameConfig()` | Dictionary mapping symbol ID (`A`, `K`, `R`) to rendering priority integer. |
| **`gameConfig`** | `GameConfig` | `null` | `setGameConfig()` | Reference to global game config instance. |
