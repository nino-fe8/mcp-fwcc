---
id: "cc_slot_module:BetHistoryModule:director_writer:subsystem_impacts"
title: "BetHistoryModule Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetHistoryModule", "bethistorymodule", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetHistoryModule Subsystem Impacts

<!-- convention-summary-start -->
### BetHistoryModule Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryModule Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Impact Matrix

- **Audio Subsystem (`SlotSoundPlayerModule`)**: Plays click SFX on page navigation and modal open/close.
- **GUI Dashboard (`UIManagerModule`)**: Disables background spin buttons while modal dialog is active.
- **Network Subsystem**: Initiates HTTP GET / Socket request for paginated bet transactions.
- **Popup Controller (`PopupControllerModule`)**: Registers in `isDisplayPopup()` to prevent overlapping dialogs.
