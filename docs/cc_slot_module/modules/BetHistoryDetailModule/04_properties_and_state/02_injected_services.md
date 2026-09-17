---
id: "cc_slot_module:BetHistoryDetailModule:properties:injected_services"
title: "BetHistoryDetailModule Injected Services"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 BetHistoryDetailModule Injected Services

<!-- convention-summary-start -->
### BetHistoryDetailModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services Table

| Service Token | Type | Purpose |
| :--- | :--- | :--- |
| `moneyFormatter` | `MoneyFormatter` | Formats raw numeric wins into formatted currency strings (e.g. `$1,250.00`). |
| `gameLogic` | `any` | Event dispatcher and data model provider. |
| `soundPlayer` | `SlotSoundPlayerModule` | Audio SFX player. |
| `observer` | `Observer` | Reactive observer binding. |
| `eventManager` | `GameEventManager` | Global UI event bus. |
