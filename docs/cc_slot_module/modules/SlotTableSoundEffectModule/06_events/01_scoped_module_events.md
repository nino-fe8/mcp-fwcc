---
id: "cc_slot_module:SlotTableSoundEffectModule:events:scoped_module_events"
title: "SlotTableSoundEffectModule Scoped Node Events"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "events", "scoped_events"]
---

# 📡 SlotTableSoundEffectModule Scoped Node Events

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Scoped Node Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Scoped Node Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Node Event Subscriptions

| Event Name | Source | Handler | Purpose |
| :--- | :--- | :--- | :--- |
| `REEL_START_SOUND` | `SlotTableModule` | `onReelStartSound` | Resets special symbol counters prior to reel rolling. |
| `REEL_STOP_SOUND` | `SlotTableModule` | `onReelStopSound` | Evaluates stopped column symbols and triggers SFX. |
