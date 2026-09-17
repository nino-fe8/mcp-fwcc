---
id: "cc_slot_module:UIManagerModule:inheritance:subclassing_guide"
title: "UIManagerModule Subclassing Guide"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ UIManagerModule Subclassing Guide

<!-- convention-summary-start -->
### UIManagerModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Strategy

- Subclass `UIManagerModule`.
- Override `showUIForGameMode(gameMode)` to inject custom mode HUD arrangements.
- Override `showBonusGameUI()` for pick-and-click mini-game HUD screens.
