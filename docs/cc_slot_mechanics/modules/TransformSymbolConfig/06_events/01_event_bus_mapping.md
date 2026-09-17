---
id: "cc_slot_mechanics:TransformSymbolConfig:events:mapping"
title: "TransformSymbolConfig Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["TransformSymbolConfig", "transform_symbol_config", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `TransformSymbolConfig` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### TransformSymbolConfig Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TransformSymbolConfig Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`TRANSFORM_SYMBOL_TO_WILD`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for TRANSFORM_SYMBOL_TO_WILD. |
| **`FRAME_TIER_UPGRADE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for FRAME_TIER_UPGRADE. |
| **`PLAY_TRANSFORM_VFX`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for PLAY_TRANSFORM_VFX. |
