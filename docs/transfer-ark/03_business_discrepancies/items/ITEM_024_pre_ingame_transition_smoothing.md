---
id: "transfer-ark:discrepancy:item_024_pre_ingame_transition_smoothing"
title: "Item #24: Pre-ingame Transition Smoothing & Asset Prewarming"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["LoadingScreenModule", "GameInit"]
tags: ["discrepancy_item_24", "pre_ingame", "smoothing", "bug_010", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #24: Pre-ingame Transition Smoothing & Asset Prewarming

<!-- convention-summary-start -->
### Pre-ingame Transition Smoothing & Asset Prewarming Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #24: Pre-ingame Transition Smoothing & Asset Prewarming.
- **Key Mechanisms & Design**: Adopts Theo ARK Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `../01_bugs_and_gotchas/BUG_010_splash_screen_stutter_and_preingame_transition_lag.md`
- **Related Docs**: [`BUG_010_splash_screen_stutter_and_preingame_transition_lag.md`](../01_bugs_and_gotchas/BUG_010_splash_screen_stutter_and_preingame_transition_lag.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#24` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Splash & Loading)
- **Detailed Bug Doc**: [`BUG_010_splash_screen_stutter_and_preingame_transition_lag.md`](../01_bugs_and_gotchas/BUG_010_splash_screen_stutter_and_preingame_transition_lag.md)
- **Final Decision**: **Theo ARK Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Pre-ingame Scene Transition** | Has optimized pre-ingame loading step to prewarm Spine caches and shaders. | No pre-ingame stage. | **Theo ARK Standard (`BUG_010`)**: Retain pre-ingame smoothing pipeline to eliminate frame stutter during scene switches. |
