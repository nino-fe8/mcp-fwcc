---
id: "cc_slot_module:SpinTimesModule:properties_and_state:inspector_properties"
title: "SpinTimesModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["SpinTimesModule", "spin_times_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SpinTimesModule Inspector Properties Specification

<!-- convention-summary-start -->
### SpinTimesModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SpinTimesModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `gameMode` | `GAME_MODE_ENUM` | `NORMAL_GAME` | Associated game mode (`NORMAL_GAME` for auto-spins, `FREE_GAME` for free spins). |
| `spinTimesLabel` | `cc.Label` | `null` | Label node displaying remaining rounds or `'∞'`. |
