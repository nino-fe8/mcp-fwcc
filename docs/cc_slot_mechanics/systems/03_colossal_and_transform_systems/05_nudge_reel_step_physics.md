---
id: "cc_slot_mechanics:systems:colossal_transforms:nudge_reel"
title: "Nudge Reel Physics & Wild Nudging Steps"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "nudge_reel", "nudge_physics", "wild_nudge"]
---

# ↕️ Nudge Reel Physics & Wild Nudging Steps

<!-- convention-summary-start -->
### Nudge Reel Physics & Wild Nudging Steps Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Nudge Reel Physics & Wild Nudging Steps.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_colossal_and_transform_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Nudge Step Calculations
If a partial Wild stack lands, `NudgeReelModule` steps the column up or down one row at a time until the Wild covers the entire reel, incrementing the wild multiplier by $+1\times$ per nudge step.
