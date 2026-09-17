---
id: "cc_slot_module:PaylineWinFrameModule:events:global_event_bus"
title: "PaylineWinFrameModule Global Event Bus Integration"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "events", "global_event_bus"]
---

# 🌐 PaylineWinFrameModule Global Event Bus Integration

<!-- convention-summary-start -->
### PaylineWinFrameModule Global Event Bus Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Global Event Bus Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Global Event Bus Summary

`PaylineWinFrameModule` interacts strictly with `payLineEmitter`. It does not attach global listeners to `eventManager`.
