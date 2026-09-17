---
id: "cc_slot_module:FortuneWheelGameDirector:overview:lifecycle_flowchart"
title: "FortuneWheelGameDirector Wheel Spin Flowchart"
category: "cc_slot_module"
tags: ["FortuneWheelGameDirector", "fortune_wheel_director", "cc_slot_module", "overview", "lifecycle", "flowchart"]
---

# 🔄 FortuneWheelGameDirector Wheel Spin Flowchart

<!-- convention-summary-start -->
### FortuneWheelGameDirector Wheel Spin Flowchart Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for FortuneWheelGameDirector Wheel Spin Flowchart.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 01_overview
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Wheel Spin Lifecycle Flowchart

```mermaid
graph TD
    Entry([enter(): startCountDown 15s]) --> Wait[Wait for User Spin or Timeout]
    
    Wait -->|User Clicks Spin / Timeout| Spin[onSpinWheel: Emit SEND_BONUS_GAME_REQUEST 0]
    Spin --> Accel[moduleEvent: START_SPIN_WHEEL isTurboActive]
    
    Accel --> Rec[Server Returns Target Wedge]
    Rec --> Settle[_showWheelResult: moduleEvent STOP_SPIN_WHEEL bonusValue]
    Settle --> SettleAnim[Wheel Decelerates and Lands on Winning Segment]
    SettleAnim --> TotalWin[_playFinalResultEffect: Launch TOTAL_WIN cutscene]
```
