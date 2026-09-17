---
id: "game-implement:9666:directors:free_game_writer_pipeline"
title: "Red Cliff (g9666) Free Game Writer Command Pipeline"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "FreeGameWriterModule9666", "free_spins", "pipeline"]
---

# 🎁 Red Cliff (g9666) Free Game Writer Command Pipeline

<!-- convention-summary-start -->
### Red Cliff (g9666) Free Game Writer Command Pipeline Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Free Game Writer Command Pipeline.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 08_directors_and_writers
- **Scope & Code Paths**: `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source File**: [`FreeGameWriterModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/GameMode/FreeGameWriterModule9666.ts)

---

## 1. Free Spin Step Sequence

1. `_startFreeSpinningTable` & `_startSpinningTopTable`
2. `_stopSpinningTopTable` & `_stopSpinningTable`
3. `_syncStackWild` (Guan Yu full column wild)
4. `_collectWildMultiplier` (Multiply consolidated Free Game multiplier)
5. `_setUpPaylines` & `_showAllPaylines`
6. `_runCascadeLoops` (Iterates until no more winning combinations)
7. `_updateFreeSpinCounter`
8. `_checkFreeGameOutro` (If remaining spins == 0)
