---
id: "cc_slot_module:BetHistoryModule:properties:injected_services"
title: "BetHistoryModule Injected Services"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 BetHistoryModule Injected Services

<!-- convention-summary-start -->
### BetHistoryModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Tokens Table

| Service Token | Type | Source Provider | Purpose in Module |
| :--- | :--- | :--- | :--- |
| `gameLogic` | `any` | Inherited from `SlotBaseModule` | Access to `getDataModel().BetHistoryData`, event emission, and localization. |
| `soundPlayer` | `SlotSoundPlayerModule` | Inherited from `SlotBaseModule` | Audio SFX trigger on pagination and button clicks. |
| `observer` | `Observer` | Inherited from `SlotBaseModule` | Watches state fields on `modelData` and binds update handlers. |
| `eventManager` | `GameEventManager` | Inherited from `SlotBaseModule` | Subscribes to global UI events such as `OPEN_BET_DETAIL`. |
