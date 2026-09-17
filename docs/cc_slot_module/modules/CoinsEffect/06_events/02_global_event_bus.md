---
id: "cc_slot_module:CoinsEffect:events:global_event_bus"
title: "CoinsEffect Global Event Bus Specification"
category: "cc_slot_module"
tags: ["CoinsEffect", "coins_effect", "cc_slot_module", "events", "global_bus"]
---

# 🌐 CoinsEffect Global Event Bus Specification

<!-- convention-summary-start -->
### CoinsEffect Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CoinsEffect Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Zero Global Bus Coupling

`CoinsEffect` does not subscribe directly to `GameEventManager`. It is driven entirely through local node events emitted by parent modal cutscenes (`WinEffectModule`, `TotalWinModule`).
