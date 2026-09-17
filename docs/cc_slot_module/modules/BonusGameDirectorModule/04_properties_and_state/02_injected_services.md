---
id: "cc_slot_module:BonusGameDirectorModule:properties:injected_services"
title: "BonusGameDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameDirectorModule", "bonus_game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameDirectorModule Injected Services

<!-- convention-summary-start -->
### BonusGameDirectorModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameDirectorModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Reads `playSession.jackpot` and `getJackpotInfo()`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Queries active speed preferences. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[BonusGameDirectorModule]`. |
