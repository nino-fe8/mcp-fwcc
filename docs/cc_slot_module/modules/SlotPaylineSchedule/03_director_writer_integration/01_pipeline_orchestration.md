---
id: "cc_slot_module:SlotPaylineSchedule:director_writer:pipeline_orchestration"
title: "SlotPaylineSchedule 3-Tier Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotPaylineSchedule", "slot_payline_schedule", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 SlotPaylineSchedule 3-Tier Pipeline Orchestration

<!-- convention-summary-start -->
### SlotPaylineSchedule 3-Tier Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotPaylineSchedule 3-Tier Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. 3-Tier Pipeline Integration

```text
NormalGameDirectorModule / Writer
       │
       ▼ (Script Step: BLINK_ALL_PAYLINES, SHOW_ALL_PAYLINES)
SlotPaylineSchedule
       │
       ▼ (payLineEmitter: PAYLINE_BLINK_ALL, PAYLINE_SHOW_LINE)
Follower Components: PaylineSymbolModule, PaylineWinFrameModule, PaylineLineModule
```

1. **Director Layer**: `NormalGameDirectorModule` executes `ScriptExecutor` which awaits `blinkAllPaylines()`.
2. **Timing Engine (`SlotPaylineSchedule`)**: Converts steps into timed delays and sequence loops.
3. **Follower Layers**: `PaylineSymbolModule` & `PaylineWinFrameModule` react to events emitted by the scheduler.
