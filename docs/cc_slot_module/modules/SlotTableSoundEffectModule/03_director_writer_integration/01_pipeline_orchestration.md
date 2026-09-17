---
id: "cc_slot_module:SlotTableSoundEffectModule:director_writer:pipeline_orchestration"
title: "SlotTableSoundEffectModule Pipeline Orchestration"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "director_writer", "pipeline"]
---

# 🎼 SlotTableSoundEffectModule Pipeline Orchestration

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Pipeline Orchestration Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Pipeline Orchestration.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Interaction Pipeline

```mermaid
graph LR
    Director[GameDirector] -->|Reel Spin & Stop Sequence| Table[SlotTableModule]
    Table -->|REEL_START_SOUND| SoundMod[SlotTableSoundEffectModule]
    Table -->|REEL_STOP_SOUND| SoundMod
    SoundMod -->|playSfx| SoundPlayer[SlotSoundPlayerModule]
```

---

## 2. Writer Command Coordination

1. **`makeScriptSpinTable`**: As reels start spinning, `SlotTableModule` emits `REEL_START_SOUND`.
2. **`makeScriptStopTable`**: As each reel finishes its stopping bounce, `SlotTableModule` emits `REEL_STOP_SOUND` containing the stopped column index and matrix symbols.
