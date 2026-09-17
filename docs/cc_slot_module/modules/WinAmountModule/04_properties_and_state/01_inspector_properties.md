---
id: "cc_slot_module:WinAmountModule:properties_and_state:inspector_properties"
title: "WinAmountModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ WinAmountModule Inspector Properties Specification

<!-- convention-summary-start -->
### WinAmountModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `labelWinAmount` | `cc.Label` | `null` | Label node displaying formatted winning amounts. |
| `winFrameEffect` | `sp.Skeleton` | `null` | Optional Spine skeleton for glowing win frame animations. |
