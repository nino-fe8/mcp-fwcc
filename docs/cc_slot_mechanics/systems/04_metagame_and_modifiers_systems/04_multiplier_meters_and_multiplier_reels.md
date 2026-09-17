---
id: "cc_slot_mechanics:systems:metagame_modifiers:multiplier_reels"
title: "Multiplier Meters & Dedicated Multiplier Reels"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "multiplier_reel", "multiplier_meter", "cascade_multiplier"]
---

# ✖️ Multiplier Meters & Dedicated Multiplier Reels

<!-- convention-summary-start -->
### Multiplier Meters & Dedicated Multiplier Reels Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Multiplier Meters & Dedicated Multiplier Reels.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_metagame_and_modifiers_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Dedicated Multiplier Column
A 6th spinning reel displaying only multiplier values ($2\times, 3\times, 5\times, 10\times, 50\times$). Any win line on reels 1..5 is multiplied by the landing value on the multiplier reel.
