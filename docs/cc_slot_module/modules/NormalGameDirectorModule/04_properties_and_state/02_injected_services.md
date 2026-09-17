---
id: "cc_slot_module:NormalGameDirectorModule:properties:injected_services"
title: "NormalGameDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 NormalGameDirectorModule Injected Services

<!-- convention-summary-start -->
### NormalGameDirectorModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NormalGameDirectorModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

Inherited from `BaseGameDirector` & `SlotBaseModule`:

| Service Token | Property Name | Purpose |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads bet size, matrix, winning paylines, and wallet state. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Tracks speed level and spin lock states. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[NormalGameDirectorModule]`. |
