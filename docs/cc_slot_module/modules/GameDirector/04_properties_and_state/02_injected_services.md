---
id: "cc_slot_module:GameDirector:properties:injected_services"
title: "GameDirector Injected IoC Services"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 GameDirector Injected IoC Services

<!-- convention-summary-start -->
### GameDirector Injected IoC Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector Injected IoC Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Purpose |
| :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | Tracks and updates `currentGameMode`. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | Stores `isJoinGameSuccess` and `bigWinConfig`. |
| **`GameConfig`** | `@inject(GameConfig) gameConfig` | Reads `BACK_TO_REAL_MODE_DELAY_TIME`. |
| **`MoneyTween`** | `@inject(MoneyTween) moneyTween` | Manages running wallet rolling tweens across mode switches. |
| **`Logger`** | `@inject(Logger) logger` | Outputs prefixed logs `[GameView] [Director]`. |
