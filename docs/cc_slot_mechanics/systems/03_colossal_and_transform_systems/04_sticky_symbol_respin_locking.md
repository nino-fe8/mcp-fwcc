---
id: "cc_slot_mechanics:systems:colossal_transforms:sticky_symbol"
title: "Sticky Symbol Locking & Respin Loops"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "sticky_symbol", "respin_loop", "lock_and_spin"]
---

# 🧲 Sticky Symbol Locking & Respin Loops

<!-- convention-summary-start -->
### Sticky Symbol Locking & Respin Loops Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Sticky Symbol Locking & Respin Loops.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_colossal_and_transform_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Respin Locking
Winning symbols lock in place on dedicated sticky overlay layers while non-winning symbols respin. Respins continue until no new matching symbols land.
