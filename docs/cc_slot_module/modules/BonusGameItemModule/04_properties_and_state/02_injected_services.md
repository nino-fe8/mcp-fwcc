---
id: "cc_slot_module:BonusGameItemModule:properties:injected_services"
title: "BonusGameItemModule Injected Services"
category: "cc_slot_module"
tags: ["BonusGameItemModule", "bonus_game_item", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BonusGameItemModule Injected Services

<!-- convention-summary-start -->
### BonusGameItemModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BonusGameItemModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Token | Injected Property | Role |
| :--- | :--- | :--- |
| **`SlotSoundPlayerModule`** | `@inject(SlotSoundPlayerModule) soundPlayer` | Plays `soundBoxClick` and `soundBoxOpen` SFX. |
| **`GameEventManager`** | `@inject(GameEventManager) eventManager` | Dispatches score notifications. |
