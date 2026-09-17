---
id: "cc_slot_module:GameInit:director_writer:subsystem_impacts"
title: "GameInit Subsystem Impacts & Downstream Dependencies"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "director_writer", "subsystems", "impacts", "dependencies"]
---

# 🌐 GameInit Subsystem Impacts & Downstream Dependencies

<!-- convention-summary-start -->
### GameInit Subsystem Impacts & Downstream Dependencies Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit Subsystem Impacts & Downstream Dependencies.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Matrix of Subsystem Impacts

`GameInit` establishes and supplies dependencies to 5 major subsystems:

| Subsystem | Impacted Components | Exact Service Provided | Downstream Consequence |
| :--- | :--- | :--- | :--- |
| **🎰 Table & Matrix** | `SlotTableModule`, `SlotSymbolManager` | `GameConfig`, `GameDataStore` | Establishes column dimensions (`TABLE_FORMAT`), symbol sizes (`SYMBOL_WIDTH`, `SYMBOL_HEIGHT`), and matrix data store. |
| **🎛️ HUD & GUI** | `BetModule`, `WalletModule`, `PaylineInfoModule` | `MoneyFormatter`, `MoneyTween`, `UIManagerModule` | Provides currency decimal formatters, balance rolling tweeners, and UI event endpoints. |
| **🔊 Audio** | `SlotSoundPlayerModule` | `SlotSoundPlayerModule` provided via IoC | Enables BGM loops, reel click sounds, and pitch-shifted win sound effects. |
| **📡 Network** | `GameLogic` (`eno.Game`) | `connectNetwork`, `network` | Handles socket login, session authentication, reconnect handshakes, and packet routing. |
| **⚙️ Preferences** | `SettingPanel`, `TurboButton` | `SlotGameSettings` | Stores turbo speed switches, background music mute states, and active language codes. |
