---
id: "cc_slot_module:PayTablePanel:inheritance:subclassing_guide"
title: "PayTablePanel Subclassing Guide"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ PayTablePanel Subclassing Guide

<!-- convention-summary-start -->
### PayTablePanel Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PayTablePanel Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Guidelines

1. Extend `PayTablePanel`.
2. Assign `scrollView` in Inspector.
3. Clean up observers in `onDestroy()`.
