---
id: "cc_slot_module:CutsceneController:events:scoped_module_events"
title: "CutsceneController Scoped Event Bus"
category: "cc_slot_module"
tags: ["CutsceneController", "cutscene_controller", "cc_slot_module", "events", "scoped_events"]
---

# 📡 CutsceneController Scoped Event Bus

<!-- convention-summary-start -->
### CutsceneController Scoped Event Bus Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for CutsceneController Scoped Event Bus.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Local Scoped Handlers

`CutsceneController` coordinates primarily through global events from `GameEventManager`.
