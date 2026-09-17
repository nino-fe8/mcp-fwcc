---
id: "transfer-ark:discrepancy:item_071_landscape_portrait_enforcement_and_fullscreen"
title: "Item #71: Landscape Orientation Enforcement & Fullscreen Expansion"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["OrientationAdapter", "FullscreenPromptModule"]
tags: ["discrepancy_item_71", "landscape", "orientation", "fullscreen", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #71: Landscape Orientation Enforcement & Fullscreen Expansion

<!-- convention-summary-start -->
### Landscape Orientation Enforcement & Fullscreen Expansion Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #71: Landscape Orientation Enforcement & Fullscreen Expansion.
- **Key Mechanisms & Design**: Adopts Theo Ref (Landscape Enforcement). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#71` in `Compare Cocos vs Pixijs.xlsx` (Section 7: Viewport & Orientation)
- **Final Decision**: **Theo Ref (Landscape Enforcement)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Device Orientation Adaptation** | Rotates game canvas or shows rotate prompt on unsupported orientations. | Defaults strictly to Landscape orientation on all devices without rotation warnings. Provides an Expand Fullscreen button on Android and a swipe-up gesture hint on iOS. | **Theo Ref**: Enforce fixed Landscape presentation with mobile fullscreen expansion prompts. |
