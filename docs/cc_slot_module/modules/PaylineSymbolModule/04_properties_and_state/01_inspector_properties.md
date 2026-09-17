---
id: "cc_slot_module:PaylineSymbolModule:properties:inspector_properties"
title: "PaylineSymbolModule Inspector Properties"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ PaylineSymbolModule Inspector Properties

<!-- convention-summary-start -->
### PaylineSymbolModule Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Usage |
| :--- | :--- | :--- | :--- |
| `container` | `cc.Node` | `null` | Parent layer holding active winning animating symbols. |
| `factory` | `SlotSymbolManager` | `null` | Reference to symbol pooling factory. |
| `disableHighlightContainer` | `cc.Node` | `null` | Optional parent holding dimmed non-winning symbols. |
