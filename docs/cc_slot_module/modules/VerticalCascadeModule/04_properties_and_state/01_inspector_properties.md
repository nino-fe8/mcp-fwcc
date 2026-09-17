---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:inspector_properties"
title: "VerticalCascadeModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ VerticalCascadeModule Inspector Properties Specification

<!-- convention-summary-start -->
### VerticalCascadeModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `container` | `cc.Node` | `null` | Parent node hosting dynamic falling symbol instances. |
| `symbolManager` | `SlotSymbolManager` | `null` | Reference to symbol pooling and lifecycle manager (auto-fetched if null). |
