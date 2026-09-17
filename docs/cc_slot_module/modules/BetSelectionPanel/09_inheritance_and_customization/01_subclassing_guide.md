---
id: "cc_slot_module:BetSelectionPanel:inheritance:subclassing_guide"
title: "BetSelectionPanel Subclassing Guide"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetSelectionPanel Subclassing Guide

<!-- convention-summary-start -->
### BetSelectionPanel Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `BetSelectionPanel`.
2. Connect `scrollViewDenom`, `scrollViewTotal`, and `betSelectionItem` in the Inspector.
3. Clean up active tweens in `onDestroy()`.
