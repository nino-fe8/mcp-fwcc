---
id: "cc_slot_module:JackpotWinNoticePopup:properties:runtime_state_variables"
title: "JackpotWinNoticePopup Runtime State"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "properties", "runtime_state"]
---

# 🧠 JackpotWinNoticePopup Runtime State

<!-- convention-summary-start -->
### JackpotWinNoticePopup Runtime State Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Runtime State.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. State Variables

| Variable | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `_listWinJP` | `NotifyJackpotWinInfo[]`| `[]` | Queue of incoming jackpot winners. |
| `_currentAward`| `NotifyJackpotWinInfo` | `null` | Currently displayed winner payload. |
| `_currentState`| `number` | `0` | FSM state (0: CLOSED, 1: MOVING, 2: IDLE, 3: CLOSING). |
