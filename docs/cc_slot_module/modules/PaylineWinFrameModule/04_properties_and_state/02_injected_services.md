---
id: "cc_slot_module:PaylineWinFrameModule:properties:injected_services"
title: "PaylineWinFrameModule Injected Services"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "properties", "injected_services", "ioc"]
---

# 💉 PaylineWinFrameModule Injected Services

<!-- convention-summary-start -->
### PaylineWinFrameModule Injected Services Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Injected Services.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Injected Parameters (via `init(params)`)

| Parameter | Type | Purpose |
| :--- | :--- | :--- |
| `payLineEmitter` | `cc.EventTarget` | Event channel for win animation notifications. |
| `config` | `PaylineConfig` | Sibling config parameters. |
| `moduleEvent` | `GameModuleEvent` | Inter-module event bus. |
| `eventManager` | `GameEventManager` | Global event bus. |
