---
id: "cc_slot_mechanics:systems:cascade_and_physics:cascade_wild_gen"
title: "Cascade Wild Generation & Multiplier Escalation"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "cascade_wild", "wild_generation", "multiplier_wild"]
---

# 🌟 Cascade Wild Generation & Multiplier Escalation

<!-- convention-summary-start -->
### Cascade Wild Generation & Multiplier Escalation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Cascade Wild Generation & Multiplier Escalation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 02_cascade_and_physics_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Generation Rules
When a cluster of $\ge 4$ symbols explodes:
- One of the exploded cells is selected (e.g. centroid or first cell).
- A newly created Wild symbol is placed at that position before gravity drops remaining symbols.
- If Wild is part of subsequent cascade wins, its multiplier doubles ($2\times \to 4\times \to 8\times$).
