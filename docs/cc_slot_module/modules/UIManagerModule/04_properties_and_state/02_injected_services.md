---
id: "cc_slot_module:UIManagerModule:properties_and_state:injected_services"
title: "UIManagerModule Injected Services"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 UIManagerModule Injected Services

<!-- convention-summary-start -->
### UIManagerModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Injection Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `dataStore` | `GameDataStore` | `@inject` | Reactive game data store. |
| `gameSettings` | `SlotGameSettings` | `@inject` | Global game settings flags (`isTrialMode`, `isAutoSpin`). |
