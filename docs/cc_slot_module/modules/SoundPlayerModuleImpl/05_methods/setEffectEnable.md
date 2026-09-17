---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:setEffectEnable"
title: "SoundPlayerModuleImpl.setEffectEnable Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "setEffectEnable"]
---

# 📖 `SoundPlayerModuleImpl.setEffectEnable()`

<!-- convention-summary-start -->
### SoundPlayerModuleImpl.setEffectEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl.setEffectEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
setEffectEnable(enable: boolean): void {
    this.isEnableSFX = enable;
    sys.localStorage.setItem(this.storageKeySFX, this.isEnableSFX.toString());
    if (this.isEnableSFX) {
        this.unmuteAllEffects();
    } else {
        this.muteAllEffects();
    }

    if (cc.director) {
        cc.director.emit("UPDATE_SFX_SETTING", enable);
    }
}
```
