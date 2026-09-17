---
id: "cc_slot_module:UIManagerModule:inheritance:override_points_matrix"
title: "UIManagerModule Override Points Matrix"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 UIManagerModule Override Points Matrix

<!-- convention-summary-start -->
### UIManagerModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Super Required | Purpose |
| :--- | :--- | :--- |
| `showUIForGameMode` | Mandatory | Injects new mode routing branches. |
| `showBonusGameUI` | Virtual Hook | Custom bonus HUD setup. |
| `isSpinVisible` | Optional | Custom interaction locks. |
| `onSwitchMode` | Mandatory | Synchronizes trial states. |
