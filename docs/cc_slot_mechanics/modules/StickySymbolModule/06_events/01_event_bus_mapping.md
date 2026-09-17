---
id: "cc_slot_mechanics:StickySymbolModule:events:mapping"
title: "StickySymbolModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `StickySymbolModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### StickySymbolModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StickySymbolModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`STICKY_LOCK_APPLIED`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for STICKY_LOCK_APPLIED. |
| **`STICKY_UNLOCK_ALL`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for STICKY_UNLOCK_ALL. |
| **`RESPIN_RETAIN_SYMBOLS`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for RESPIN_RETAIN_SYMBOLS. |
