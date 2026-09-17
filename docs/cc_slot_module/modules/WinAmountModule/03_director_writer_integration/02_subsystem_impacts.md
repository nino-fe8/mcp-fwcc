---
id: "cc_slot_module:WinAmountModule:director_writer:subsystem_impacts"
title: "WinAmountModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["WinAmountModule", "win_amount_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 WinAmountModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### WinAmountModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WinAmountModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subsystem Influences

| Subsystem | Impact |
| :--- | :--- |
| **`PaylineControllerModule`** | Coordinates line presentation duration with win roll-ups. |
| **`WalletModule`** | Waits for `updateWinAmount` completion before executing `resumeWallet()`. |
| **`SlotSoundPlayerModule`** | Plays continuous coin count-up audio synchronized with `MoneyTween`. |
| **`WinEffectModule`** | Replaces on-screen label display during fullscreen Big Win cutscenes. |
