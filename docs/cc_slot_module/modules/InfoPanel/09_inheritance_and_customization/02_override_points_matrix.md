---
id: "cc_slot_module:InfoPanel:inheritance:override_points_matrix"
title: "InfoPanel Override Points Matrix"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "inheritance", "override_points"]
---

# 📋 InfoPanel Override Points Matrix

<!-- convention-summary-start -->
### InfoPanel Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Points

| Method | Safe to Override? | Required `super` | Purpose |
| :--- | :--- | :--- | :--- |
| `activeButtons()` | `YES` | `MANDATORY` | Custom page indicator highlights. |
| `resetInfo()` | `YES` | `MANDATORY` | Custom page scroll resets. |
