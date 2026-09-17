---
id: "cc_slot_module:PortraitBetModule:inheritance:override_points_matrix"
title: "PortraitBetModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PortraitBetModule", "portraitbetmodule", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 PortraitBetModule Override Points Matrix

<!-- convention-summary-start -->
### PortraitBetModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PortraitBetModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `setupObserver()` | `YES` | `MANDATORY` | Bind custom bet modifiers. |
| `onDestroy()` | `YES` | `MANDATORY` | Observer cleanup. |
