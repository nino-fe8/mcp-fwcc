---
id: "cc_slot_module:PaylineWinFrameModule:properties:runtime_state_variables"
title: "PaylineWinFrameModule Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineWinFrameModule Runtime State Variables

<!-- convention-summary-start -->
### PaylineWinFrameModule Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal State Variables

| Field Name | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `frames` | `cc.Node[][]` | `[]` | 2D cache grid of instantiated frame nodes `frames[reel][row]`. |
| `winFramePool` | `cc.NodePool` | `new NodePool("PaylineWinFrame")` | Object pool for zero-allocation recycling. |
