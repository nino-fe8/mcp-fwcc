---
id: "cc_slot_module:BetHistoryModule:properties:runtime_state_variables"
title: "BetHistoryModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BetHistoryModule Runtime State Variables

<!-- convention-summary-start -->
### BetHistoryModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Field Name | Type | Default | Mutation Moment | Purpose & Guard Role |
| :--- | :--- | :--- | :--- | :--- |
| `modelData` | `any` | `null` | `setupObserver()` | Cached reference to `gameLogic.getDataModel().BetHistoryData`. |
| `isInit` | `boolean` | `false` | Component initialization | Guard flag preventing repeated init execution. |
| `popupBehavior` | `PopupBehavior` | `null` | `onLoadExtend()` (Base class) | Handles tween fade and modal scaling transitions. |
| `currentIsActive`| `boolean` | `false` | `togglePopup()` | Prevents redundant open/close tween executions. |
