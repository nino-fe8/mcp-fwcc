---
id: "cc_slot_mechanics:systems:colossal_transforms:gigablox"
title: "Gigablox Colossal Blocks Synchronization Engine"
category: "cc_slot_mechanics"
tags: ["cc_slot_mechanics", "systems", "gigablox", "colossal_blocks", "mega_symbols", "2x2_3x3_4x4"]
---

# 🗿 Gigablox Colossal Blocks Synchronization Engine

<!-- convention-summary-start -->
### Gigablox Colossal Blocks Synchronization Engine Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gigablox Colossal Blocks Synchronization Engine.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 03_colossal_and_transform_systems
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Colossal Block Synchronization Math
Gigablox locks multiple adjacent reels (e.g. Reels 1, 2, 3) to spin as a single colossal $3\times 3$ block. When evaluating paylines, the colossal block splits virtually into 9 individual $1\times 1$ matching symbols.
