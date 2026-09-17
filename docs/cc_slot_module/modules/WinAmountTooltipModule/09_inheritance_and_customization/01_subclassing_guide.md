---
id: "cc_slot_module:WinAmountTooltipModule:inheritance:subclassing_guide"
title: "WinAmountTooltipModule Subclassing Guide"
category: "cc_slot_module"
tags: ["WinAmountTooltipModule", "winamounttooltipmodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ WinAmountTooltipModule Subclassing Guide

<!-- convention-summary-start -->
### WinAmountTooltipModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountTooltipModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `WinAmountTooltipModule`.
2. Assign `featureSfs` sprite frames and widths in Inspector.
3. Stop tweens in `onDestroy()`.
