---
id: "cc_slot_module:WinAmountModule:properties_and_state:injected_services"
title: "WinAmountModule Injected Services"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 WinAmountModule Injected Services

<!-- convention-summary-start -->
### WinAmountModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `moneyFormatter` | `eno.MoneyFormatter` | `@inject` | Formats numeric values into currency strings. |
| `moneyTween` | `eno.MoneyTween` | `@inject` | Executes frame-by-frame numeric count-up tweens (`runNumber`). |
| `dataStore` | `GameDataStore` | `@inject` | Retrieves last win amount on reconnect (`getWinAmountPS()`). |
