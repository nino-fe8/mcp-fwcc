---
id: "cc_slot_module:BetModule:properties_and_state:inspector_properties"
title: "BetModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BetModule Inspector Properties Specification

<!-- convention-summary-start -->
### BetModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `betDenomLabel` | `cc.Label` | `null` | Label rendering the active coin denomination. |
| `totalBetLabel` | `cc.Label` | `null` | Label rendering the total cash wager. |
| `totalLineLabel` | `cc.Label` | `null` | Optional label rendering active payline count. |
| `totalCreditLabel`| `cc.Label` | `null` | Optional label rendering credit balance. |
| `increaseBet` | `cc.Button` | `null` | Stepper button to increase wager. |
| `decreaseBet` | `cc.Button` | `null` | Stepper button to decrease wager. |
| `sfxIncreaseBetId`| `string` | `"BTN_BET_INCREASE"` | Audio key for bet increment. |
| `sfxDecreaseBetId`| `string` | `"BTN_BET_DECREASE"` | Audio key for bet decrement. |
