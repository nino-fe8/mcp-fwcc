---
id: "transfer-ark:discrepancy:item_025_fullsize_background_and_pc_resize_fix"
title: "Item #25: Full-size Background Adapter & PC Resize Black Screen Fix"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["DesktopAdapter", "ResizeAdapter", "MainGameModule"]
tags: ["discrepancy_item_25", "background", "black_screen", "resize", "ark_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #25: Full-size Background Adapter & PC Resize Black Screen Fix

<!-- convention-summary-start -->
### Full-size Background Adapter & PC Resize Black Screen Fix Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #25: Full-size Background Adapter & PC Resize Black Screen Fix.
- **Key Mechanisms & Design**: Adopts Lắp Background Full Size / Fix Black Screen on Resize. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#25` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Splash & Loading)
- **Final Decision**: **Lắp Background Full Size / Fix Black Screen on Resize**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Viewport Background on Window Resize** | Supports dynamic aspect ratio background adaptation without black borders. | Black background only; when browser is resized on PC, canvas does not update dynamically until full tab reload. | **ARK Standard Fix**: Implement full-size responsive background scaling with `ResizeAdapter` to eliminate black borders. |
