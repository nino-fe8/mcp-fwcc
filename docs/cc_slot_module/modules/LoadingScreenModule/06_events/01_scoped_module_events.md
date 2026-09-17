---
id: "cc_slot_module:LoadingScreenModule:events:scoped_module_events"
title: "LoadingScreenModule Scoped Module Events"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "events", "scoped"]
---

# 📡 LoadingScreenModule Scoped Module Events

<!-- convention-summary-start -->
### LoadingScreenModule Scoped Module Events Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Scoped Module Events.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Window & DOM Events
- Listens to `onHideSplashScreen` on `window` to reset progress bar state.
