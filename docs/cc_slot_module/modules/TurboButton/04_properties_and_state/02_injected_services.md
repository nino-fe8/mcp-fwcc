---
id: "cc_slot_module:TurboButton:properties_and_state:injected_services"
title: "TurboButton Injected Services"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "properties", "injected_services"]
---

# 💉 TurboButton Injected Services

<!-- convention-summary-start -->
### TurboButton Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Scope | Purpose |
| :--- | :--- | :--- | :--- |
| `gameSettings` | `SlotGameSettings` | `@inject` | Reads/writes `isTurboActive` boolean. |
