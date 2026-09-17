---
id: "cc_slot_module:JackpotModule:director_writer:pipeline_orchestration"
title: "JackpotModule Pipeline & Event Integration"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🔗 JackpotModule Pipeline & Event Integration

<!-- convention-summary-start -->
### JackpotModule Pipeline & Event Integration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule Pipeline & Event Integration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Event Orchestration

Listens to `GameUIEvents.JACKPOT` channels:
- `PAUSE_JACKPOT`: Halts progressive pool animations.
- `RESUME_JACKPOT`: Resumes progressive pool animations.
- `UPDATE_JACKPOT_VALUE`: Direct forced update of specific tier pool values.
