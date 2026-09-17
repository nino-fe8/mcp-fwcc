---
id: "cc_slot_module:SoundPlayerModuleImpl:events:global_event_bus"
title: "SoundPlayerModuleImpl Global Events"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "events", "global_bus"]
---

# 🌐 SoundPlayerModuleImpl Global Events

<!-- convention-summary-start -->
### SoundPlayerModuleImpl Global Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl Global Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->

- Listens to `cc.game.EVENT_HIDE` and `cc.game.EVENT_SHOW`.
- Emits `UPDATE_SFX_SETTING` on `cc.director`.
