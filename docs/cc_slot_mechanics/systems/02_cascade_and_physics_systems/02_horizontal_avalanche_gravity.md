---
id: "cc_slot_mechanics:systems:cascade_and_physics:horizontal_avalanche"
title: "Horizontal Avalanche Gravity & Lateral Shift"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "horizontal_cascade", "lateral_shift", "avalanche"]
---

# ➡️ Horizontal Avalanche Gravity & Lateral Shift

<!-- convention-summary-start -->
### Horizontal Avalanche Gravity & Lateral Shift Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Horizontal Avalanche Gravity & Lateral Shift.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 02_cascade_and_physics_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Horizontal Shift Coordinate Math
In horizontal cascade slots, empty columns shift leftwards, and refill symbols slide in from the rightmost column.
