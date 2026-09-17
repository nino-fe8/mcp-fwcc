---
id: "cc_slot_module:DialogMessageModule:properties:injected_services"
title: "DialogMessageModule Injected Services"
category: "cc_slot_module"
tags: ["DialogMessageModule", "dialogmessagemodule", "cc_slot_module", "properties", "injected_services"]
---

# 💉 DialogMessageModule Injected Services

<!-- convention-summary-start -->
### DialogMessageModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for DialogMessageModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `gameLogic` | `any` | Event dispatcher. |
| `soundPlayer` | `SlotSoundPlayerModule` | Click SFX. |
| `observer` | `Observer` | Observes `DialogData`. |
