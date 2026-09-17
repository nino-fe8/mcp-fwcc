---
id: "cc_slot_mechanics:systems:metagame_modifiers:instant_cash"
title: "Instant Cash Hold & Win Gathering"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "instant_cash", "hold_and_win", "cash_coins", "collector_symbol"]
---

# 💰 Instant Cash Hold & Win Gathering

<!-- convention-summary-start -->
### Instant Cash Hold & Win Gathering Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Instant Cash Hold & Win Gathering.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_metagame_and_modifiers_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Hold & Win Gathering
When coin symbols land alongside a Collector symbol, all coin cash values are summed instantly and awarded to the player.
