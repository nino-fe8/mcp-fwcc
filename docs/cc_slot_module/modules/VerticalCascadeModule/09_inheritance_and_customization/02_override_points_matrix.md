---
id: "cc_slot_module:VerticalCascadeModule:inheritance:override_points_matrix"
title: "VerticalCascadeModule Override Points & Extension Matrix"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 VerticalCascadeModule Override Points & Extension Matrix

<!-- convention-summary-start -->
### VerticalCascadeModule Override Points & Extension Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Override Points & Extension Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Matrix

| Method | Super Call Required | Purpose |
| :--- | :--- | :--- |
| `playFalling` | Optional | Custom drop animation curve or easing. |
| `removeSymbolAt` | Optional | Custom particle explosion before pool recycling. |
| `stopRespinWithNearwin` | Optional | Custom near-win column suspension. |
| `resetAllEffectAndTasks` | Mandatory (`super.resetAllEffectAndTasks()`) | Cleanup custom particle nodes and timers. |
