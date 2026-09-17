---
id: "cc_slot_module:BaseGameDirector:properties:injected_services"
title: "BaseGameDirector Injected IoC Services"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "properties", "injected_services", "ioc", "inject"]
---

# 💉 BaseGameDirector Injected IoC Services

<!-- convention-summary-start -->
### BaseGameDirector Injected IoC Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector Injected IoC Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Provider Source | Role in Director |
| :--- | :--- | :--- | :--- |
| **`GameDataStore`** | `@inject(GameDataStore) dataStore` | `GameInit` on `Canvas/Director` | Reads active `playSession` data (matrices, win amounts, nextMode). |
| **`Logger`** | `@inject(Logger) logger` | `GameInit` Container | Configures stylized console tags for `ScriptExecutor` pipeline steps. |
| **`SlotGameSettings`** | `@inject(SlotGameSettings) gameSettings` | `GameInit` on `Canvas/Director` | Evaluates speed modes (`isTurboActive`, `isFastToResult`) and updates `currentGameState`. |
