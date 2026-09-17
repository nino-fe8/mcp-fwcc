---
id: "cc_slot_module:ToastInfoModule:inheritance:subclassing_guide"
title: "ToastInfoModule Subclassing Guide"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ ToastInfoModule Subclassing Guide

<!-- convention-summary-start -->
### ToastInfoModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Strategy

- Override `showMessage()` to add icon tinting based on message severity (Info vs Warning vs Error).
