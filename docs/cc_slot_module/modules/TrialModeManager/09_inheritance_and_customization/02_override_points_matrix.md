---
id: "cc_slot_module:TrialModeManager:inheritance:override_points_matrix"
title: "TrialModeManager Override Points Matrix"
category: "cc_slot_module"
tags: ["TrialModeManager", "trial_mode_manager", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 TrialModeManager Override Points Matrix

<!-- convention-summary-start -->
### TrialModeManager Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TrialModeManager Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | `public` | Mandatory | Event initialization and observer setup. |
| `updateTrialModePanel` | `public` | Recommended | Panel visibility and tweening. |
| `updateOptions` | `public` | Recommended | Scenario button interactability states. |
