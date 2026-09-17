---
id: "cc_slot_module:CutsceneController:events:global_event_bus"
title: "CutsceneController Global Event Bus Specification"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "events", "global_bus"]
---

# 🌐 CutsceneController Global Event Bus Specification

<!-- convention-summary-start -->
### CutsceneController Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subscribed Global Events

| Event Constant | Handler | Payload | Action |
| :--- | :--- | :--- | :--- |
| `GameUIEvents.CUTSCENES.PLAY_CUTSCENE` | `playCutScene` | `{ cutsceneType, cutsceneData }` | Plays modal and awaits Promise completion. |
| `GameUIEvents.CUTSCENES.CLOSE_CUTSCENE` | `closeCutScene` | `{ cutsceneType, cutsceneData }` | Closes modal and awaits Promise completion. |
| `GameUIEvents.CUTSCENES.SKIP_CUTSCENES` | `skipCutScenes` | `void` | Calls `skip()` on all modals. |
| `GameUIEvents.CUTSCENES.CLOSE_ALL_NOTICES` | `closeAllNotices` | `void` | Emits `CLOSE_NOTICE` on all modals. |
