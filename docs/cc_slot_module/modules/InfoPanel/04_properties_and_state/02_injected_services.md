---
id: "cc_slot_module:InfoPanel:properties:injected_services"
title: "InfoPanel Injected Services"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "properties", "injected_services"]
---

# 💉 InfoPanel Injected Services

<!-- convention-summary-start -->
### InfoPanel Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Services

| Service | Type | Purpose |
| :--- | :--- | :--- |
| `soundPlayer` | `SlotSoundPlayerModule` | Audio SFX player. |
| `gameLogic` | `any` | Event dispatcher. |
| `observer` | `Observer` | Watches `UIManagerData.isInfoOpen`. |
