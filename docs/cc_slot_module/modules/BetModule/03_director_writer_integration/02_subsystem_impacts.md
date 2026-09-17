---
id: "cc_slot_module:BetModule:director_writer:subsystem_impacts"
title: "BetModule Cross-Subsystem Impacts"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "director_writer", "subsystems"]
---

# 🌐 BetModule Cross-Subsystem Impacts

<!-- convention-summary-start -->
### BetModule Cross-Subsystem Impacts Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule Cross-Subsystem Impacts.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 03_director_writer_integration
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Cross-Subsystem Matrix

| Subsystem | Impact |
| :--- | :--- |
| **`GameDataStore`** | Stores `currentBetData` used across payout math and win presentation. |
| **`WalletModule`** | Deducts total bet amount on round spin start. |
| **`SlotSoundPlayerModule`** | Plays `sfxIncreaseBetId` / `sfxDecreaseBetId` sound cues. |
| **`DenomLabel` / `TotalBetLabel`** | Listens to `ON_UPDATE_VALUE` to format currency strings. |
