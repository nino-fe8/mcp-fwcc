---
id: "cc_slot_module:FreeOptionDirectorModule:properties:injected_services"
title: "FreeOptionDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["FreeOptionDirectorModule", "free_option_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 FreeOptionDirectorModule Injected Services

<!-- convention-summary-start -->
### FreeOptionDirectorModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeOptionDirectorModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Property | Type | Role |
| :--- | :--- | :--- |
| **`gameLogic`** | `GameLogic` | Retrieves localized text strings (`getGameText`) and emits network requests. |
| **`eventManager`** | `EventManager` | Listens to global scene lifecycle and state transition events. |
| **`dataStore`** | `GameDataStore` | Reads active session data. |
