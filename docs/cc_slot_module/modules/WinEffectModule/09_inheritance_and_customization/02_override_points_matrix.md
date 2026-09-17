---
id: "cc_slot_module:WinEffectModule:inheritance:override_points_matrix"
title: "WinEffectModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["WinEffectModule", "win_effect_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 WinEffectModule Override Points & Extension Matrix

<!-- convention-summary-start -->
### WinEffectModule Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinEffectModule Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `initValue` | Recommended | Initialize custom multipliers. |
| `updateCurrentTitle` | Optional | Custom escalation conditions. |
| `showFastEffectWin` | Optional | Custom Turbo mode particle/VFX. |
| `playSoundStart` | Hook | Play victory intro SFX. |
| `playSoundEnd` | Hook | Play victory triumph SFX. |
| `resumeMainBGM` | Hook | Restore base game music. |
