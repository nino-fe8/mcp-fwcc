---
id: "cc_slot_module:BetHistoryDetailModule:inheritance:subclassing_guide"
title: "BetHistoryDetailModule Subclassing Guide"
category: "cc_slot_module"
tags: ["BetHistoryDetailModule", "bethistorydetailmodule", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ BetHistoryDetailModule Subclassing Guide

<!-- convention-summary-start -->
### BetHistoryDetailModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Rules

1. Inherit from `BetHistoryDetailModule`.
2. Do not override `onLoad()` directly; implement `onLoadExtend()`.
3. When overriding `updateGameModeInfo()` or `onRenderDataView()`, invoke `super` to ensure base formatting logic executes.
4. Clean up custom node pools or event subscriptions in `onDestroy()`.
