---
id: "cc_slot_module:JackpotWinModule:properties_and_state:inspector_properties"
title: "JackpotWinModule Inspector Properties Specification"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "properties", "inspector", "decorator"]
---

# 🎛️ JackpotWinModule Inspector Properties Specification

<!-- convention-summary-start -->
### JackpotWinModule Inspector Properties Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule Inspector Properties Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Inspector Property Schema

| Name | Type | Default | When Set | Where Read | Impact If Desynced |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `delayShowTime` | `number` | `2` | Design time in Editor | `bindQuickShow()` | Altering modifies unskippable grace period (0 allows instant skipping). |
| `delayHideTime` | `number` | `1` | Design time in Editor | `finish()` | Modifies linger duration before cutscene auto-dismissal. |
| `animDuration` | `number` | `10` | Design time in Editor | `startUpdateWinAmount()` | Sets base duration for natural count-up number interpolation. |
| `winAmount` | `cc.Node` | `null` | Scene authoring in Editor | `onLoadExtend()` | Must host a `cc.Label` component; if missing, runtime crash on label update. |
| `title` | `cc.Node` | `null` | Scene authoring in Editor | `enter()` | Hosts tier title text or Spine skeleton (`GRAND`, `MAJOR`, `MINOR`, `MINI`). |
| `coinsEffect` | `cc.Node` | `null` | Scene authoring in Editor | `onLoadExtend()` | Hosts `cc.ParticleSystem` coin shower effect. |
