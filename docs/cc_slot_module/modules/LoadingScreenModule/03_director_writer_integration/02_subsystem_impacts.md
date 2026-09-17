---
id: "cc_slot_module:LoadingScreenModule:pipeline:subsystem_impacts"
title: "LoadingScreenModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "pipeline", "subsystem_impacts"]
---

# 🌐 LoadingScreenModule Subsystem Impacts

<!-- convention-summary-start -->
### LoadingScreenModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Impacts

* **Audio Context**: Unlocks Howler audio context via `JsbUtils.registerLoadHowl()` so BGM plays immediately upon main scene start.
* **Network Failover**: If scene preload fails (e.g. 404 or corrupted asset), triggers `handleFlowOutGame()` to display reconnect/exit dialogues.
