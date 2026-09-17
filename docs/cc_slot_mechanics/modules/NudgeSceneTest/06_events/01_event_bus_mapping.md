---
id: "cc_slot_mechanics:NudgeSceneTest:events:mapping"
title: "NudgeSceneTest Event Bus Mapping & Subscriptions"
category: "cc_slot_mechanics"
tags: ["NudgeSceneTest", "nudge_scene_test", "cc_slot_mechanics", "events", "bus"]
---

# 🔊 `NudgeSceneTest` Event Bus Mapping & Subscriptions

<!-- convention-summary-start -->
### NudgeSceneTest Event Bus Mapping & Subscriptions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for NudgeSceneTest Event Bus Mapping & Subscriptions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 06_events
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Registered Module Events

| Event Name | Direction | Payload | Functional Purpose |
| :--- | :---: | :--- | :--- |
| **`NUDGE_REEL_START`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for NUDGE_REEL_START. |
| **`NUDGE_STEP_COMPLETE`** | `IN / OUT` | `{ data }` | Synchronizes mechanics state for NUDGE_STEP_COMPLETE. |
