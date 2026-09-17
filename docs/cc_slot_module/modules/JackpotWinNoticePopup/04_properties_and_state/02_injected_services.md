---
id: "cc_slot_module:JackpotWinNoticePopup:properties:injected_services"
title: "JackpotWinNoticePopup Injected Services"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "properties", "injected_services"]
---

# 💉 JackpotWinNoticePopup Injected Services

<!-- convention-summary-start -->
### JackpotWinNoticePopup Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `moneyFormatter` | `MoneyFormatter` | Formats jackpot award amounts. |
| `gameLogic` | `any` | Access to `getUserDisplayName()` and `getGameText()`. |
| `observer` | `Observer` | Reactive observer binding. |
