---
id: "cc_slot_module:UIManagerModule:director_writer:subsystem_impacts"
title: "UIManagerModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 UIManagerModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### UIManagerModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`SlotButtonModule`** | Interrogates `checkDisplayPopup()` before processing spacebar shortcuts. |
| **`PopupControllerModule`**| Consulted by `UIManagerModule` for active popup status. |
| **`CutsceneController`** | Consulted by `UIManagerModule` for active cutscene modal status. |
| **`GameDataStore`** | Updates `isTrialMode` property during mode shifts. |
