---
id: "cc_slot_module:BaseCutscene:properties_and_state:injected_services"
title: "BaseCutscene Injected Services"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BaseCutscene Injected Services

<!-- convention-summary-start -->
### BaseCutscene Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services

| Service | Type | Injection Token | Purpose |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject(GameDataStore)` | Accesses current session bets and win records. |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject(eno.MoneyFormatter)` | Formats numeric currencies into localized strings. |
| `moneyTween` | `eno.MoneyTween` | `@inject(eno.MoneyTween)` | Drives number rolling count-up animations. |
| `gameSettings` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Reads Turbo / Fast-to-Result flags. |
