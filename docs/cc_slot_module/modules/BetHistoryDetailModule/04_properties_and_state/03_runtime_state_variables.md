---
id: "cc_slot_module:BetHistoryDetailModule:properties:runtime_state_variables"
title: "BetHistoryDetailModule Runtime State Variables"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 BetHistoryDetailModule Runtime State Variables

<!-- convention-summary-start -->
### BetHistoryDetailModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Table

| Field Name | Type | Default | Purpose & Guard Role |
| :--- | :--- | :--- | :--- |
| `scrollPool` | `cc.NodePool` | `null` | Zero-allocation pool for `ScrollModeItem` tab nodes. |
| `usingScrollItem`| `cc.Node[]` | `[]` | List of currently active tab nodes mounted in `scrollContent`. |
| `betHistoryData` | `any` | `null` | Cached reference to `BetHistoryData`. |
| `betHistoryDetailData`| `any` | `null` | Cached reference to `BetHistoryDetailData`. |
