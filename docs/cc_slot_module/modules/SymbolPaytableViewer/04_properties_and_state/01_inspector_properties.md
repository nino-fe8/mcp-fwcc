---
id: "cc_slot_module:SymbolPaytableViewer:properties:inspector_properties"
title: "SymbolPaytableViewer Inspector Properties"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ SymbolPaytableViewer Inspector Properties

<!-- convention-summary-start -->
### SymbolPaytableViewer Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `touchHolder` | `cc.Node` | `null` | Touch interception area. |
| `bgNode` | `cc.Node` | `null` | Dim backdrop overlay. |
| `topBlock` | `cc.Node` | `null` | Blocker preventing duplicate clicks. |
| `symbolPayoutViewer`| `SymbolPayoutViewer`| `null`| Callout popup component. |
