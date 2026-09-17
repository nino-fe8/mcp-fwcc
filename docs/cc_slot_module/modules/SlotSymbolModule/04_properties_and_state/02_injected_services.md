---
id: "cc_slot_module:SlotSymbolModule:properties:injected_services"
title: "SlotSymbolModule Injected Services & Managers"
category: "cc_slot_module"
tags: ["SlotSymbolModule", "slot_symbol_module", "cc_slot_module", "properties", "injected_services", "resource_manager"]
---

# 💉 SlotSymbolModule Injected Services & Managers

<!-- convention-summary-start -->
### SlotSymbolModule Injected Services & Managers Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSymbolModule Injected Services & Managers.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Resource Manager Dependency

| Service / Interface | Concrete Type | Resolution Hook | Role in Module |
| :--- | :--- | :--- | :--- |
| `resourceManager` | `ISlotSymbolResource` (`SlotSymbolResourceManager`) | `setResourceManager()` | Provides `getSymbolFrame()`, `getBlurSymbolFrame()`, and `getSymbolSkeleton()`. |
