---
id: "cc_slot_mechanics:systems:metagame_modifiers:buy_feature"
title: "Buy Feature HUD & Pricing Math"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "buy_feature", "feature_buy", "pricing_math", "bonus_buy"]
---

# 🛒 Buy Feature HUD & Pricing Math

<!-- convention-summary-start -->
### Buy Feature HUD & Pricing Math Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Buy Feature HUD & Pricing Math.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_metagame_and_modifiers_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Pricing Formula
$$\text{Buy Price} = \text{Total Bet} \times \text{Feature Multiplier (e.g. 100x)}$$
Validates player balance, deducts funds, and triggers `GameModeDirectorModule` directly into `FREE_GAME` without normal spinning.
