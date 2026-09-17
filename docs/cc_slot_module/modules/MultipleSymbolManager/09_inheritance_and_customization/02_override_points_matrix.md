---
id: "cc_slot_module:MultipleSymbolManager:customization:override_points_matrix"
title: "MultipleSymbolManager Override Points Matrix"
category: "cc_slot_module"
tags: ["MultipleSymbolManager", "multiple_symbol_manager", "cc_slot_module", "customization", "override_points"]
---

# 📋 MultipleSymbolManager Override Points Matrix

<!-- convention-summary-start -->
### MultipleSymbolManager Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultipleSymbolManager Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Extension Points Summary

| Method Signature | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- |
| `initSymbolPool(): void` | `YES` | Optional | Custom `SlotCustomNodePool` instantiation. |
| `getSymbolFromPool(code)` | `YES` | Optional | Custom dynamic routing logic. |
