---
id: "cc_slot_module:PaylineInfoModule:properties_and_state:injected_services"
title: "PaylineInfoModule Injected Services"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 PaylineInfoModule Injected Services

<!-- convention-summary-start -->
### PaylineInfoModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject` | Formats currency winning values. |
| `gameConfig` | `GameConfig` | `@inject` | Reads `PAY_SYSTEM` enum. |
| `dataStore` | `GameDataStore` | `@inject` | Checks `currentGameMode`. |
