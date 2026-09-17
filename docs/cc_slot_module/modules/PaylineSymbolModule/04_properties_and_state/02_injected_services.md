---
id: "cc_slot_module:PaylineSymbolModule:properties:injected_services"
title: "PaylineSymbolModule Injected Services"
category: "cc_slot_module"
tags: ["PaylineSymbolModule", "payline_symbol_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 PaylineSymbolModule Injected Services

<!-- convention-summary-start -->
### PaylineSymbolModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineSymbolModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Parameters (via `init(params)`)

| Parameter | Type | Purpose |
| :--- | :--- | :--- |
| `payLineEmitter` | `cc.EventTarget` | Event channel for receiving payline triggers (`PAYLINE_BLINK_ALL`, etc.). |
| `config` | `PaylineConfig` | Provides `IS_DEBUG` and `PLAY_ANIMATION_LOOP`. |
| `moduleEvent` | `GameModuleEvent` | Inter-module event bus. |
| `eventManager` | `GameEventManager` | Global event bus. |
