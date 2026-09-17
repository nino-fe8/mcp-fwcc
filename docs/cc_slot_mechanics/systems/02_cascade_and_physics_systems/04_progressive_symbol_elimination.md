---
id: "cc_slot_mechanics:systems:cascade_and_physics:symbol_elimination"
title: "Progressive Symbol Elimination Engine"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "removed_symbol", "symbol_elimination", "royal_removal"]
---

# 🚫 Progressive Symbol Elimination Engine

<!-- convention-summary-start -->
### Progressive Symbol Elimination Engine Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Progressive Symbol Elimination Engine.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 02_cascade_and_physics_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Elimination Pipeline
Tracks winning symbols per cascade step. When a royal symbol hits a win, `RemovedSymbolModule` permanently strips that symbol from reel strip replenishment pools for the remainder of the Free Spins round.
