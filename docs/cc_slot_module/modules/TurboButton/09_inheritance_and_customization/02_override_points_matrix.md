---
id: "cc_slot_module:TurboButton:inheritance:override_points_matrix"
title: "TurboButton Override Points Matrix"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 TurboButton Override Points Matrix

<!-- convention-summary-start -->
### TurboButton Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | `public` | Mandatory | Event and observer registration. |
| `onTurboActive` | `public` | Mandatory | Setting updates and visual emission. |
| `playSfxTurbo` | `public` | Optional | Audio playback routing. |
