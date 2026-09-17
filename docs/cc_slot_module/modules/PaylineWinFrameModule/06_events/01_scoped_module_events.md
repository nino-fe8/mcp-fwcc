---
id: "cc_slot_module:PaylineWinFrameModule:events:scoped_module_events"
title: "PaylineWinFrameModule Scoped & Internal Bus Events"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 PaylineWinFrameModule Scoped & Internal Bus Events

<!-- convention-summary-start -->
### PaylineWinFrameModule Scoped & Internal Bus Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Scoped & Internal Bus Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Internal `payLineEmitter` Events

| Event Name | Direction | Payload | Purpose |
| :--- | :--- | :--- | :--- |
| **`SYMBOL_PLAY_ANIMATION_WIN`** | Listens To | `{ symbol, duration }` | Triggers border animation for symbol coordinates. |
| **`PAYLINE_STOP_ALL`** | Listens To | None | Hides active border frames. |
| **`PAYLINE_CLEAR`** | Listens To | None | Recycles all frame nodes back into `winFramePool`. |
