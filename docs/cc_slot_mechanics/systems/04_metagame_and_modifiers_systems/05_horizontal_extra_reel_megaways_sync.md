---
id: "cc_slot_mechanics:systems:metagame_modifiers:horizontal_reel"
title: "Horizontal Extra Top Reel Megaways Synchronization"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "horizontal_reel", "extra_top_reel", "megaways_sync"]
---

# ↔️ Horizontal Extra Top Reel Megaways Synchronization

<!-- convention-summary-start -->
### Horizontal Extra Top Reel Megaways Synchronization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Horizontal Extra Top Reel Megaways Synchronization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 04_metagame_and_modifiers_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Top Reel Coordinate Integration
A 4-symbol horizontal strip mounted above columns 2, 3, 4, 5. `HorizontalReelModule` feeds symbols into the top of the main matrix, acting as row 0 for reels 1, 2, 3, 4 during win evaluation.
