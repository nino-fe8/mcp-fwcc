---
id: "cc_slot_module:PaylineInfoModule:inheritance:override_points_matrix"
title: "PaylineInfoModule Override Points Matrix"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 PaylineInfoModule Override Points Matrix

<!-- convention-summary-start -->
### PaylineInfoModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Matrix

| Method | Scope | Super Required | Purpose |
| :--- | :--- | :--- | :--- |
| `onLoadExtend` | `public` | Mandatory | Asset setup and event registration. |
| `convertPayLineInfo` | `protected` | Recommended | Math format conversion dispatcher. |
| `setPaylineInfo` | `protected` | Recommended | UI node rendering and animation. |
