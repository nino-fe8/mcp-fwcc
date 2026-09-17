---
id: "cc_slot_module:SymbolPaytableViewer:properties:injected_services"
title: "SymbolPaytableViewer Injected Services"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SymbolPaytableViewer Injected Services

<!-- convention-summary-start -->
### SymbolPaytableViewer Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | Checks play session. |
| `gameSettings` | `SlotGameSettings` | Validates `currentGameState === IDLE`. |
