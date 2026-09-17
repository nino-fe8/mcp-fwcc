---
id: "cc_slot_mechanics:MegaReelData:inheritance:override_points_matrix"
title: "MegaReelData Override Points Matrix"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "inheritance", "override_matrix"]
---

# 🧩 MegaReelData Override Points Matrix

<!-- convention-summary-start -->
### MegaReelData Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelData Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Method | Safe to Override? | Required Super Call |
| :--- | :--- | :--- |
| **`onloadExtend()`** | `YES` | `Recommended` |
| **`getHalfBonusIndex()`** | `YES` | `Recommended` |
| **`getFullBonusIndex()`** | `YES` | `Recommended` |
| **`formatMegaData()`** | `YES` | `Recommended` |
| **`isSubset()`** | `YES` | `Recommended` |
