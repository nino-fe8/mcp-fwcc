---
id: "cc_slot_module:SlotCustomNodePool:customization:subclassing_guide"
title: "SlotCustomNodePool Subclassing & Extension Guide"
category: "cc_slot_module"
tags: ["SlotCustomNodePool", "slot_custom_node_pool", "cc_slot_module", "customization", "subclassing"]
---

# 🏗️ SlotCustomNodePool Subclassing & Extension Guide

<!-- convention-summary-start -->
### SlotCustomNodePool Subclassing & Extension Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotCustomNodePool Subclassing & Extension Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Principles & Guidelines

* 🟢 **Subclass for Custom Dynamic Key Formats**: Override `getSpecialPoolName` if special symbols use size suffixes (e.g. `WILD_2_2`).
* 🛑 **Preserve Metadata Tagging**: Never bypass `setNodeMetadata()` when instantiating new pool nodes.
