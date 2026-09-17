---
id: "transfer-ark:discrepancy:item_020_independent_bgm_and_sfx_toggle_buttons"
title: "Item #20: Independent BGM and SFX Audio Toggle Controls"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SettingPanel", "SoundModule", "SoundPlayer"]
tags: ["discrepancy_item_20", "audio", "bgm", "sfx", "sound_toggle", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #20: Independent BGM and SFX Audio Toggle Controls

<!-- convention-summary-start -->
### Independent BGM and SFX Audio Toggle Controls Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #20: Independent BGM and SFX Audio Toggle Controls.
- **Key Mechanisms & Design**: Adopts Theo Ref - App Feature Standard. Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#20` in `Compare Cocos vs Pixijs.xlsx` (Section 4: Popups, Settings, Audio & Network)
- **Final Decision**: **Theo Ref - App Feature Standard**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Audio Controls in Setting** | Single master sound toggle button for both BGM and SFX. | Two independent checkbox/toggle controls: one for Background Music (BGM) and one for Sound Effects (SFX). | **Theo Ref**: Provide 2 dedicated toggles for BGM and SFX in Setting Menu. |
