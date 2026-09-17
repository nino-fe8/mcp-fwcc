---
id: "cc_slot_module:ExtraBetModule:inheritance:subclassing_guide"
title: "ExtraBetModule Subclassing Guide"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ ExtraBetModule Subclassing Guide

<!-- convention-summary-start -->
### ExtraBetModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Subclass `ExtraBetModule` to create custom Golden Bet or Fortune Bet switches.
- Override `onUpdateTotalBet()` to toggle Spine switches or sprite frames.
