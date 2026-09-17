---
id: "cc_slot_module:BetSelectionPanel:properties:inspector_properties"
title: "BetSelectionPanel Inspector Properties"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ BetSelectionPanel Inspector Properties

<!-- convention-summary-start -->
### BetSelectionPanel Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `betSelectionItem` | `cc.Prefab` | `null` | Row item prefab with label and highlight. |
| `scrollViewDenom` | `cc.ScrollView`| `null` | Denomination scroll view. |
| `scrollViewTotal` | `cc.ScrollView`| `null` | Total bet scroll view. |
| `scrollContentDenom`| `cc.Node` | `null` | Denomination content parent with Layout. |
| `scrollContentTotal`| `cc.Node` | `null` | Total bet content parent with Layout. |
| `totalCreditLabel` | `cc.Label` | `null` | Player total credit label. |
| `maxBetBtn` | `cc.Button` | `null` | Shortcut to select highest wager. |
| `scrollTime` | `number` | `0.15` | Tween snap duration in seconds. |
| `bufferTop` | `number` | `1` | Top empty buffer rows. |
| `bufferBot` | `number` | `1` | Bottom empty buffer rows. |
