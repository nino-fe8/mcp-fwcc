---
id: "cc_slot_module:BaseCutscene:events:global_event_bus"
title: "BaseCutscene Global Event Bus Specification"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "events", "global_bus"]
---

# 🌐 BaseCutscene Global Event Bus Specification

<!-- convention-summary-start -->
### BaseCutscene Global Event Bus Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene Global Event Bus Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Emitted Global Events

| Event Constant | Bus | Purpose |
| :--- | :--- | :--- |
| `GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE` | `eventManager` | Notifies HUD and buttons to disable touches. |
| `GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE` | `eventManager` | Notifies HUD and buttons to re-enable touches. |
| `GameLogicUIEvents.ON_CUTSCENE_CLOSE` | `gameLogic` | Informs network logic that cutscene closed. |
