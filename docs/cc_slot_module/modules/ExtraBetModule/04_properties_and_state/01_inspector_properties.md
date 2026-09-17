---
id: "cc_slot_module:ExtraBetModule:properties_and_state:inspector_properties"
title: "ExtraBetModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ ExtraBetModule Inspector Properties Specification

<!-- convention-summary-start -->
### ExtraBetModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Property Schema

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `extraBetLabel` | `cc.Label` | `null` | Label displaying current extra bet modifier value. |
| `increaseExtraBet` | `cc.Button` | `null` | Button to increment extra bet level. |
| `decreaseExtraBet` | `cc.Button` | `null` | Button to decrement extra bet level. |
| `sfxIncreaseExtraBetId` | `string` | `""` | Optional audio key for extra bet increment. |
| `sfxDecreaseExtraBetId` | `string` | `""` | Optional audio key for extra bet decrement. |
