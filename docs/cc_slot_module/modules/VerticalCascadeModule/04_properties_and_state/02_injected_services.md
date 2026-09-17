---
id: "cc_slot_module:VerticalCascadeModule:properties_and_state:injected_services"
title: "VerticalCascadeModule Injected Services"
category: "cc_slot_module"
tags: ["VerticalCascadeModule", "vertical_cascade_module", "cc_slot_module", "properties", "injected_services"]
---

# 💉 VerticalCascadeModule Injected Services

<!-- convention-summary-start -->
### VerticalCascadeModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for VerticalCascadeModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Dependencies

| Service | Type | Ingestion Mechanism | Purpose |
| :--- | :--- | :--- | :--- |
| `gameSettings` | `SlotGameSettings` | `@inject(SlotGameSettings)` | Ingests Turbo / Fast-to-Result state (`isTurboActive`). |
| `moduleEvent` | `cc.EventTarget` | `setupModule()` | Scoped director event bus. |
| `eventManager` | `GameEventManager` | Inherited from `SlotBaseModule` | Global event manager. |
