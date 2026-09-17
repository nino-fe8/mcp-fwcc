---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:setBgmEnable"
title: "SoundPlayerModuleImpl.setBgmEnable Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "setBgmEnable"]
---

# 📖 `SoundPlayerModuleImpl.setBgmEnable()`

<!-- convention-summary-start -->
### SoundPlayerModuleImpl.setBgmEnable Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl.setBgmEnable Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
setBgmEnable(enable: boolean): void {
    this.isEnableBGM = enable;
    sys.localStorage.setItem(this.storageKeyBGM, this.isEnableBGM.toString());

    if (this.enableMusicFunc) {
        clearTimeout(this.enableMusicFunc);
    }
    this.enableMusicFunc = setTimeout(() => {
        if (this.isEnableBGM) {
            this.unmuteMusic();
        } else {
            this.muteMusic();
        }
        this.enableMusicFunc = null;
    }, 100);
}
```
