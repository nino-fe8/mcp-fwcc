---
id: "cc_slot_module:MultipleSymbolManager:properties:injected_services"
title: "MultipleSymbolManager Injected Services & Dependencies"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "properties", "injected_services"]
---

# 💉 MultipleSymbolManager Injected Services & Dependencies

<!-- convention-summary-start -->
### MultipleSymbolManager Injected Services & Dependencies Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Injected Services & Dependencies.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Services (Inherited from `SlotSymbolManager`)

| Service | Type | Injection Method | Role in Module |
| :--- | :--- | :--- | :--- |
| `gameConfig` | `GameConfig` | Set by `SlotTableModule.onLoadExtend()` | Provides symbol definitions and default matrices. |
