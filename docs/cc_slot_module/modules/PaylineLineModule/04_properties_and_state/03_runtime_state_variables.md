---
id: "cc_slot_module:PaylineLineModule:properties_and_state:runtime_state_variables"
title: "PaylineLineModule Internal Runtime State Variables"
category: "cc_slot_module"
tags: ["PaylineLineModule", "payline_line_module", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 PaylineLineModule Internal Runtime State Variables

<!-- convention-summary-start -->
### PaylineLineModule Internal Runtime State Variables Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineLineModule Internal Runtime State Variables.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Runtime Variable Specifications

| Variable Name | Type | Initial Value | Mutation Moment | Lifecycle Boundary |
| :--- | :--- | :--- | :--- | :--- |
| `linePool` | `cc.NodePool` | `new NodePool("SlotLineItem")` | `getLine()` takes; `clearAll()` returns. | Scene lifetime. |
| `payLines` | `PayLineInfo[]` | `[]` | Updated during `setupPaylines()`. | Spin lifetime. |
| `lines` | `cc.Node[]` | `[]` | Indexed by `lineID` on `showLineNumber()`; reset in `clearAll()`. | Round lifetime. |
