---
id: "cc_slot_module:CascadeModuleConfig:overview:architecture_and_role"
title: "CascadeModuleConfig Architectural Role & Parameters"
category: "cc_slot_module"
tags: ["CascadeModuleConfig", "cascade_module_config", "cc_slot_module", "overview", "architecture", "config"]
---

# 🏛️ CascadeModuleConfig Architectural Role & Parameters

<!-- convention-summary-start -->
### CascadeModuleConfig Architectural Role & Parameters Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CascadeModuleConfig Architectural Role & Parameters.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Architectural Mission

`CascadeModuleConfig` is the configuration data container defining the geometry, drop physics timing constants, elimination symbols codes, and symbol index maps for the Cascade & Avalanche Subsystem.

---

## 2. Key Parameters

- `CASCADE_TABLE_CONFIG`: Matrix format `[3, 3, 3, 3, 3]`, cell size `Vec2(180, 160)`, and pre-calculated cell positions.
- `DROP_SYMBOL_CODE = '-1'`: Elimination sentinel string.
- `FALLING_TIME = 0.2`: Base drop duration (in seconds).
- `DELAY_FALLING_TIME = 0.2`: Near-win delay offset.
- `CASCADING_TIME_COMPLETED = 1.5`: Overall step timeout budget.
- `SYMBOL_INDEXES`: Lazy-cached 2D symbol index matrix.
