---
id: "cc_slot_module:MultipleSymbolManager:properties:inspector_properties"
title: "MultipleSymbolManager Inspector Properties Reference"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "properties", "inspector_properties"]
---

# 🎛️ MultipleSymbolManager Inspector Properties Reference

<!-- convention-summary-start -->
### MultipleSymbolManager Inspector Properties Reference Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Inspector Properties Reference.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cocos Inspector Serialized Fields

| Property Name | Type | Default Value | Role in Component |
| :--- | :--- | :--- | :--- |
| **`template`** (Inherited) | `cc.Prefab` | `null` | Base prefab for standard normal symbols. |
| **`initCount`** (Inherited) | `number` | `30` | Initial pre-warmed count for the standard normal pool. |
| **`specialSymbolTemplates`** | `SpecialSymbolTemplates[]` | `[]` | Array of custom special symbol templates (`symbolCode`, `template`, `initCount`). |
