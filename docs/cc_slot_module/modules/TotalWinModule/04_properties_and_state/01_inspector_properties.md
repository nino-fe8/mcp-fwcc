---
id: "cc_slot_module:TotalWinModule:properties_and_state:inspector_properties"
title: "TotalWinModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ TotalWinModule Inspector Properties Specification

<!-- convention-summary-start -->
### TotalWinModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `delayShowTime` | `number` | `1` | Grace period in seconds before tap-to-skip unlocks. |
| `hideTime` | `number` | `0.5` | Delay in seconds before deactivating modal after count ends. |
| `animDuration` | `number` | `10` | Duration in seconds for standard money count-up tween. |
| `winAmount` | `cc.Node` | `null` | Node hosting the score label. |
| `coinsEffect` | `cc.Node` | `null` | Node hosting particle systems. |
