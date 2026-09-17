---
id: "cc_slot_module:BetModule:inheritance:subclassing_guide"
title: "BetModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetModule Subclassing Guide

<!-- convention-summary-start -->
### BetModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Strategy

- Override `setupObserver()` to watch custom multipliers or denomination formats.
- Override `playSfxIncreaseBet()` / `playSfxDecreaseBet()` for specialized audio triggers.
- Subclass `BetLabelModule` or `DenomLabel` to customize number formatting and currency symbols.
