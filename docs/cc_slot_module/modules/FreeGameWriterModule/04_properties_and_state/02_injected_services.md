---
id: "cc_slot_module:FreeGameWriterModule:properties:injected_services"
title: "FreeGameWriterModule Injected Services"
category: "cc_slot_module"
tags: ["FreeGameWriterModule", "free_game_writer", "cc_slot_module", "properties", "injected_services"]
---

# 💉 FreeGameWriterModule Injected Services

<!-- convention-summary-start -->
### FreeGameWriterModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameWriterModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Property | Service Type | Role |
| :--- | :--- | :--- |
| **`dataStore`** | `GameDataStore` | Reads `playSession.freeGameRemain`, `winAmount`, `payLines`. |
