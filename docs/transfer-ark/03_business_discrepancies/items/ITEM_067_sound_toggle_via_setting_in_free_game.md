---
id: "transfer-ark:discrepancy:item_067_sound_toggle_via_setting_in_free_game"
title: "Item #67: Sound Toggle Via Setting Menu In Free Game Mode"
category: "business_discrepancy"
game_ids: ["g9666", "all"]
sdk_modules: ["SoundModule", "SettingPanel", "FreeGameHUD"]
tags: ["discrepancy_item_67", "sound_toggle", "free_game", "setting_panel", "refer_standard"]
created_at: "2026-08-28"
author: "ARK Slot Engineering Team"
---

# 📌 Item #67: Sound Toggle Via Setting Menu In Free Game Mode

<!-- convention-summary-start -->
### Sound Toggle Via Setting Menu In Free Game Mode Summary

- **Core Architecture / Purpose**: Specifies the standard business behavior, UI presentation, and player interaction differences between Cocos Creator and Reference Game for Item #67: Sound Toggle Via Setting Menu In Free Game Mode.
- **Key Mechanisms & Design**: Adopts Theo Ref (According to Reference Game). Reconciles base SDK component locking, event dispatching, and view rehydration to match reference specifications exactly.
- **Domain Capabilities**: business_discrepancy, items
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Excel Reference Row**: `#67` in `Compare Cocos vs Pixijs.xlsx` (Section 2: Big Win & Free Game)
- **Final Decision**: **Theo Ref (According to Reference Game)**

---

## 1. 🏢 Behavior Comparison

| Aspect | Cocos Creator Base SDK (`cc-common`) | Reference Game (Pixi.js) | ARK Final Solution |
| :--- | :--- | :--- | :--- |
| **Sound Toggle in Free Game** | Renders an ad-hoc sound mute button on the main Free Game screen. | No standalone sound button on HUD; players toggle BGM and SFX via the standard Setting Menu modal. | **Theo Ref**: Remove redundant standalone sound button from Free Game HUD; audio is configured inside Setting Menu. |
