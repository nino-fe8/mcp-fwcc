---
id: "cc_slot_module:PaylineSymbolModule:properties:runtime_state_variables"
title: "PaylineSymbolModule Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineSymbolModule Runtime State Variables

<!-- convention-summary-start -->
### PaylineSymbolModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Variables

| Field Name | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `mapTableSymbols` | `cc.Node[][]` | `[]` | 2D array caching symbol node references indexed by `[reel][row]`. |
| `matrix` | `string[][]` | `[]` | Active symbol code matrix. |
| `payLines` | `PayLineInfo[]` | `[]` | Active list of hit paylines. |
| `symbols` (getter)| `cc.Node[]` | - | Flattened array of all non-null symbol nodes. |
