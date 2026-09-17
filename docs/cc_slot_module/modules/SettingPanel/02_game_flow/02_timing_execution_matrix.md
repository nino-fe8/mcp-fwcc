---
id: "cc_slot_module:SettingPanel:game_flow:timing_execution_matrix"
title: "SettingPanel Timing Matrix"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "game_flow", "timing"]
---

# 📊 SettingPanel Timing Matrix

<!-- convention-summary-start -->
### SettingPanel Timing Matrix Summary

- **Core Architecture / Purpose**: Defines network protocol, socket packet lifecycle, state persistence, and error handling for SettingPanel Timing Matrix.
- **Key Mechanisms & Design**: Handles WebSocket frame dispatch, acknowledgment confirmation, state resume, and resilient synchronization between client DataStore and Backend Gateway.
- **Domain Capabilities**: cc_slot_module, 02_game_flow
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Timing Table

| Action | Invoker | Method | State Mutation |
| :--- | :--- | :--- | :--- |
| **BGM Toggle** | Player Click | `onBgmToggle()` | `isEnableBGM` mutated |
| **SFX Toggle** | Player Click | `onSfxToggle()` | `isEnableSFX` mutated |
| **Close** | Player Click | `onExit()` | `isSettingsOpen = false` |
