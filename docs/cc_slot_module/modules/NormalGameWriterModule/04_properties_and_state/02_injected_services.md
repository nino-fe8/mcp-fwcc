---
id: "cc_slot_module:NormalGameWriterModule:properties:injected_services"
title: "NormalGameWriterModule Injected Services"
category: "cc_slot_module"
tags: ["NormalGameWriterModule", "normal_game_writer", "cc_slot_module", "properties", "injected_services"]
---

# 💉 NormalGameWriterModule Injected Services

<!-- convention-summary-start -->
### NormalGameWriterModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameWriterModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads active spin session matrices and win amounts. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries active speed preferences. |
