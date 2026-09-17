---
id: "cc_slot_module:InfoPanel:inheritance:subclassing_guide"
title: "InfoPanel Subclassing Guide"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ InfoPanel Subclassing Guide

<!-- convention-summary-start -->
### InfoPanel Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `InfoPanel`.
2. Populate `titles` array with matching header sprite frames in the Inspector.
3. Call `super.activeButtons(id)` when extending page-turn behaviors.
