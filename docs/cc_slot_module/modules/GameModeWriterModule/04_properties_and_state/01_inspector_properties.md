---
id: "cc_slot_module:GameModeWriterModule:properties:inspector_properties"
title: "GameModeWriterModule Inspector Properties"
category: "cc_slot_module"
tags: ["GameModeWriterModule", "game_mode_writer", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ GameModeWriterModule Inspector Properties

<!-- convention-summary-start -->
### GameModeWriterModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeWriterModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Inspector Properties Reference Table

`GameModeWriterModule` does not declare any `@property` fields in the Inspector. It receives state dynamically via IoC injection (`@inject(GameDataStore) dataStore`, `@inject(SlotGameSettings) gameSettings`).
