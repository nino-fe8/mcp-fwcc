---
id: "cc_slot_module:BetSelectionPanel:properties:injected_services"
title: "BetSelectionPanel Injected Services"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "properties", "injected_services"]
---

# 💉 BetSelectionPanel Injected Services

<!-- convention-summary-start -->
### BetSelectionPanel Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `moneyFormatter` | `MoneyFormatter` | Formats currency bet numbers. |
| `gameLogic` | `any` | Event bus and data model access. |
| `soundPlayer` | `SlotSoundPlayerModule` | Click SFX. |
| `observer` | `Observer` | Watches BetData and UIManagerData. |
