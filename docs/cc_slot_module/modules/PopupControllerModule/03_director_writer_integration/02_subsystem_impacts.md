---
id: "cc_slot_module:PopupControllerModule:director_writer:subsystem_impacts"
title: "PopupControllerModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["PopupControllerModule", "popup_controller", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 PopupControllerModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### PopupControllerModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PopupControllerModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`GameModeDirectorModule`** | Blocks reel start when `isDisplayPopup() === true`. |
| **`SlotButtonModule`** | Interactivity disabled or spacebar key presses suppressed when modal active. |
