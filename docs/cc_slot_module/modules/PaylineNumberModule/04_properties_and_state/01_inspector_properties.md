---
id: "cc_slot_module:PaylineNumberModule:properties_and_state:inspector_properties"
title: "PaylineNumberModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["PaylineNumberModule", "payline_number_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineNumberModule Inspector Properties Specification

<!-- convention-summary-start -->
### PaylineNumberModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineNumberModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `container` | `cc.Node[]` | `[]` | List of parent gutter nodes scanned in `onLoadExtend()` for `PaylineNumberItem` components. |
