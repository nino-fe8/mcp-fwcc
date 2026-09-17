---
id: "cc_slot_module:SettingPanel:properties:injected_services"
title: "SettingPanel Injected Services"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "properties", "injected_services"]
---

# 💉 SettingPanel Injected Services

<!-- convention-summary-start -->
### SettingPanel Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SettingPanel Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Audio volume control and click SFX. |
| `gameLogic` | `any` | Event dispatcher and data model access. |
| `observer` | `Observer` | Reactive observer binding. |
