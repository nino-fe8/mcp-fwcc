---
id: "cc_slot_module:GameEventManager:director_writer:pipeline_orchestration"
title: "GameEventManager Cross-System Event Bus Orchestration"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 GameEventManager Cross-System Event Bus Orchestration

<!-- convention-summary-start -->
### GameEventManager Cross-System Event Bus Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager Cross-System Event Bus Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Decoupled Communication Hub

`GameEventManager` serves as the primary decoupled communication backbone connecting disparate system nodes without direct object references:

```mermaid
graph TD
    Director[GameModeDirectorModule] -->|emit: ON_UPDATE_WALLET| Bus[GameEventManager Singleton]
    Bus -->|await| Wallet[WalletModule: Runs Rolling Coin Count-up]
    Bus -->|await| Sound[SlotSoundPlayerModule: Plays Coin Loop SFX]
    Bus -->|await| HUD[HUD/TopBar: Updates Balance String]
```
