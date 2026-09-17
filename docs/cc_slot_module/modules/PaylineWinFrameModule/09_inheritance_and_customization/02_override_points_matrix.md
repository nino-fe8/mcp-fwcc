---
id: "cc_slot_module:PaylineWinFrameModule:inheritance:override_points_matrix"
title: "PaylineWinFrameModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineWinFrameModule Override Points Matrix

<!-- convention-summary-start -->
### PaylineWinFrameModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points Matrix

| Method | Safe to Override? | Required `super` | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `playAnimation` | `YES` | Optional | Custom animation names or tinting logic. |
| `spawnFrame` | `YES` | Optional | Custom prefab layout or particle attachment. |
| `clearAll` | `NO` | `MANDATORY` | Pool recycling safety. |
