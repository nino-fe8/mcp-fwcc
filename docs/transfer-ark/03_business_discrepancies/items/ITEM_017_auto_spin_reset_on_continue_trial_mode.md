---
id: "transfer-ark:discrepancy:item_017_auto_spin_reset_on_continue_trial_mode"
title: "Item #17: Auto Spin Reset to Idle When Continuing Trial Mode"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["AutoSpinPanelv3", "SlotGameLogic", "DialogMessageModule"]
tags: ["discrepancy_item_17", "trial_mode", "auto_spin_reset", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #17: Auto Spin Reset to Idle When Continuing Trial Mode

<!-- convention-summary-start -->
### Auto Spin Reset to Idle When Continuing Trial Mode Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #17: Auto Spin Reset to Idle When Continuing Trial Mode.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#17` in `Compare Cocos vs Pixijs.xlsx` (Section 6: Demo Mode vs Real Mode)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Continuing Trial Mode After Prompt** | When Real Money prompt appears during active Auto Spin, selecting "Continue Demo" resumes auto-spinning. | Selecting "Continue Demo" resets game state back to Idle in Base Game. | **Theo Ref**: Cancel active Auto Spin and return to Base Game Idle when dismissing Real Money prompt. |
