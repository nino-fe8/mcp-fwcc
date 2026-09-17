---
id: "cc_slot_module:SlotTableSoundEffectModule:inheritance:override_points_matrix"
title: "SlotTableSoundEffectModule Override Points Matrix"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "inheritance", "override_matrix"]
---

# 🧬 SlotTableSoundEffectModule Override Points Matrix

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Override Points Matrix Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Override Points Matrix.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Override Matrix

| Extension Method | Base Implementation | Safe to Override? | Required `super` Call | Customization Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `onReelStartSound()` | Resets counters to `0` | `YES` | `MANDATORY` | Resetting custom audio counters (e.g. Wild multipliers). |
| `onReelStopSound(data)` | Evaluates specials & triggers audio | `YES` | Optional | Custom sound rules (e.g. Megaways dynamic column stops). |
| `playSfxReelStop()` | Calls `soundPlayer.playSfx` | `YES` | Optional | Alternate stop audio per reel column. |
| `playSfxSpecialSymbol(flags)` | Tiered ladder SFX playback | `YES` | Optional | Custom ladder logic or stings. |
