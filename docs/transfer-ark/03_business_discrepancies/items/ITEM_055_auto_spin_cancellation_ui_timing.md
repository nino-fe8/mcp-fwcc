---
id: "transfer-ark:discrepancy:item_055_auto_spin_cancellation_ui_timing"
title: "Item #55: Auto Spin Cancellation UI State Transition Timing"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["AutoSpinPanelv3", "SlotButtonNormal"]
tags: ["discrepancy_item_55", "auto_spin", "cancellation", "timing", "workaround"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #55: Auto Spin Cancellation UI State Transition Timing

<!-- convention-summary-start -->
### Auto Spin Cancellation UI State Transition Timing Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #55: Auto Spin Cancellation UI State Transition Timing.
- **Key Mechanisms & Design**: Adopts Workaround / Theo Ref. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#55` in `Compare Cocos vs Pixijs.xlsx` (Section 1: Base Game & Action Panel)
- **Final Decision**: **Workaround / Theo Ref**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Cancelling Auto Spin Mid-Turn** | When the player taps the Spin button to stop Auto Spin, the UI instantly switches back to Normal Idle state even though current spin is still ongoing. | When stopped mid-turn, the Spin button retains the Auto Spin visual indicator until the current reel spin completes; only then does it revert to normal Idle. | **Theo Ref**: Defer switching the button sprite back to Normal Idle until the active spin session emits `SPIN_COMPLETED`. |
