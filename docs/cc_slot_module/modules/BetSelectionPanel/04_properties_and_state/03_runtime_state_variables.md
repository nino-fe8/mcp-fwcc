---
id: "cc_slot_module:BetSelectionPanel:properties:runtime_state_variables"
title: "BetSelectionPanel Runtime State"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BetSelectionPanel Runtime State

<!-- convention-summary-start -->
### BetSelectionPanel Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Variables

| Variable | Type | Purpose |
| :--- | :--- | :--- |
| `mapBetIdWithIndex` | `Record` | Map from betKey to numerical row index. |
| `currentBetId` | `string` | Currently focused betKey. |
| `showItems` | `number` | Total count of valid bet tiers. |
| `totalBetItems` | `BetSelectionItem[]`| Array of total bet item components. |
| `betDenomItems` | `BetSelectionItem[]`| Array of denom item components. |
