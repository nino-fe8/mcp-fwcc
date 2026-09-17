---
id: "cc_slot_module:SettingPanel:director_writer:subsystem_impacts"
title: "SettingPanel Subsystem Impacts"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 SettingPanel Subsystem Impacts

<!-- convention-summary-start -->
### SettingPanel Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Impacts

- **Sound Player (`SlotSoundPlayerModule`)**: `setBgmEnable()` and `setEffectEnable()` are directly synchronized.
- **Child Popups**: Dispatches events to open Bet History and Jackpot History modals.
