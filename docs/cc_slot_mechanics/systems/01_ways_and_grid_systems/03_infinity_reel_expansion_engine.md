---
id: "cc_slot_mechanics:systems:ways_and_grid:infinity_reels"
title: "Infinity Reels Expanding Column Engine"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "infinity_reels", "dynamic_columns", "expanding_matrix"]
---

# ♾️ Infinity Reels Expanding Column Engine

<!-- convention-summary-start -->
### Infinity Reels Expanding Column Engine Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Infinity Reels Expanding Column Engine.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 01_ways_and_grid_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Mechanics Rules
1. Begins as standard $3\times 3$ grid.
2. If any symbol improves a win on the rightmost reel, a new reel is instantiated dynamically to the right.
3. The newly added reel spins while existing reels hold their symbols.
4. If the new reel matches and extends the win, the cycle repeats indefinitely, multiplying total round payout.
