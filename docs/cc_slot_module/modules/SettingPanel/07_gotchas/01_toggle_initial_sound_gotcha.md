---
id: "cc_slot_module:SettingPanel:gotchas:01_toggle_initial_sound_gotcha"
title: "Toggle Initial Sound Gotcha"
category: "cc_slot_module"
tags: ["SettingPanel", "settingpanel", "cc_slot_module", "gotchas", "audio_glitch"]
---

# ⚠️ Toggle Initial Sound Gotcha

<!-- convention-summary-start -->
### Toggle Initial Sound Gotcha Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Toggle Initial Sound Gotcha.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Defect & Workaround

Setting `this.bgmToggle.isChecked` during startup can trigger Cocos toggle event callbacks, creating audio clicks during loading. Guard click handlers using `this.initialized`:

```typescript
onBgmToggle(): void {
    if (this.soundPlayer && this.initialized) {
        this.gameLogic.emit(GameLogicUIEvents.TOGGLE_BGM);
        this.soundPlayer.playSFXClick();
    }
}
```
