---
id: "cc_slot_module:BetModule:inheritance:override_points_matrix"
title: "BetModule Override Points Matrix"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 BetModule Override Points Matrix

<!-- convention-summary-start -->
### BetModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `start` | `public` | Recommended | Model binding and initial disable state. |
| `setupObserver` | `public` | Optional | Custom data field subscriptions. |
| `onIncreaseBet` / `onDecreaseBet` | `public` | Recommended | Stepper action overrides. |
| `playSfxIncreaseBet` / `playSfxDecreaseBet` | `public` | Optional | Audio cue custom routing. |
