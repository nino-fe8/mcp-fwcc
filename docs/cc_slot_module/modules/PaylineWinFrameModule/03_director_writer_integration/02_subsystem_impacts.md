---
id: "cc_slot_module:PaylineWinFrameModule:director_writer:subsystem_impacts"
title: "PaylineWinFrameModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["PaylineWinFrameModule", "payline_win_frame_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PaylineWinFrameModule Subsystem Impacts

<!-- convention-summary-start -->
### PaylineWinFrameModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineWinFrameModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystems Cross-Reference

| Component | Interaction | Impact |
| :--- | :--- | :--- |
| **`PaylineSymbolModule`** | Emits `SYMBOL_PLAY_ANIMATION_WIN` | Tells `PaylineWinFrameModule` which coordinate cell needs a frame overlay. |
| **`SlotPaylineSchedule`** | Emits `PAYLINE_STOP_ALL` | Requests hiding of frames between individual cyclic line presentations. |
