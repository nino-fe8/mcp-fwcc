---
id: "cc_slot_module:FreeGameDirectorModule:properties:injected_services"
title: "FreeGameDirectorModule Injected Services"
category: "cc_slot_module"
tags: ["FreeGameDirectorModule", "free_game_director", "cc_slot_module", "properties", "injected_services"]
---

# 💉 FreeGameDirectorModule Injected Services

<!-- convention-summary-start -->
### FreeGameDirectorModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FreeGameDirectorModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Injected Services Reference Table

| Service Property | Type | Role |
| :--- | :--- | :--- |
| **`dataStore`** | `GameDataStore` | Reads `freeGameRemain`, `freeGame`, `winAmountPS`, `winAmount`. |
| **`gameSettings`**| `SlotGameSettings` | Reads speed and trial status. |
| **`soundPlayer`** | `SlotSoundPlayerModule`| Controls feature BGM and sounds. |
