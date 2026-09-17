---
id: "cc_slot_module:ExtraBetModule:inheritance:override_points_matrix"
title: "ExtraBetModule Override Points Matrix"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 ExtraBetModule Override Points Matrix

<!-- convention-summary-start -->
### ExtraBetModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `start` | `public` | Recommended | Model registration. |
| `setupObserver` | `public` | Optional | Custom data field subscriptions. |
| `onUpdateTotalBet` | `public` | Recommended | Visual representation of modifier value. |
| `onIncreaseExtraBet` / `onDecreaseExtraBet` | `public` | Recommended | Stepper action dispatchers. |
