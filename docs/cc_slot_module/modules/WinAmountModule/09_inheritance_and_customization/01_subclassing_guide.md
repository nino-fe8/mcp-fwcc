---
id: "cc_slot_module:WinAmountModule:inheritance:subclassing_guide"
title: "WinAmountModule Subclassing Guide"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ WinAmountModule Subclassing Guide

<!-- convention-summary-start -->
### WinAmountModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `playWinEffect()` and `stopWinEffect()` to trigger custom Spine auras or coin fountains.
- Override `_updateLabelWinAmount()` to add custom prefixes, suffixes, or currency symbols.
