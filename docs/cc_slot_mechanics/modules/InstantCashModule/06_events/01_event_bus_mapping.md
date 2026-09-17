---
id: "cc_slot_mechanics:InstantCashModule:events:mapping"
title: "InstantCashModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["InstantCashModule", "instant_cash_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `InstantCashModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### InstantCashModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InstantCashModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`INSTANT_CASH_COLLECTED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for INSTANT_CASH_COLLECTED. |
| **`RESET_RESPIN_COUNT`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESET_RESPIN_COUNT. |
| **`SETTLE_JACKPOT_PRIZE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for SETTLE_JACKPOT_PRIZE. |
