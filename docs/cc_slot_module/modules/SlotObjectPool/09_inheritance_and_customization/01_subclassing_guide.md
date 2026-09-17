---
id: "cc_slot_module:SlotObjectPool:inheritance:subclassing_guide"
title: "SlotObjectPool Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotObjectPool", "slot_object_pool", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotObjectPool Subclassing Guide

<!-- convention-summary-start -->
### SlotObjectPool Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotObjectPool Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Notes

- Override `get()` to add custom setup handlers (e.g., Spine skeleton skin setup).
- Override `put()` to stop active particle systems or audio loops attached to the item.
