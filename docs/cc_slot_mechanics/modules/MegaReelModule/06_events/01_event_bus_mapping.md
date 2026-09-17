---
id: "cc_slot_mechanics:MegaReelModule:events:mapping"
title: "MegaReelModule Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `MegaReelModule` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### MegaReelModule Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`MEGA_REEL_LINK`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for MEGA_REEL_LINK. |
| **`MEGA_REEL_UNLINK`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for MEGA_REEL_UNLINK. |
