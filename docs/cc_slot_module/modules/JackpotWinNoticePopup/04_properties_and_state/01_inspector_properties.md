---
id: "cc_slot_module:JackpotWinNoticePopup:properties:inspector_properties"
title: "JackpotWinNoticePopup Inspector Properties"
category: "cc_slot_module"
tags: ["JackpotWinNoticePopup", "jackpotwinnoticepopup", "cc_slot_module", "properties", "inspector"]
---

# 🎛️ JackpotWinNoticePopup Inspector Properties

<!-- convention-summary-start -->
### JackpotWinNoticePopup Inspector Properties Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinNoticePopup Inspector Properties.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 04_properties_and_state
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Properties Table

| Property | Type | Default | Purpose |
| :--- | :--- | :--- | :--- |
| `displayNameLb` | `cc.Label` | `null` | Winner nickname label. |
| `textWin` | `cc.Label` | `null` | Localized "won the jackpot" text. |
| `winAmountLb` | `cc.Label` | `null` | Formatted jackpot payout amount. |
| `delayTime` | `number` | `4` | Duration (seconds) banner stays on screen. |
| `delayNextWinner`| `number` | `2` | Delay (seconds) before displaying next winner in queue. |
| `fadeTime` | `number` | `0.5` | Fade-in / Fade-out tween duration. |
