---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:playMusic"
title: "SoundPlayerModuleImpl.playMusic Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "playMusic"]
---

# 📖 `SoundPlayerModuleImpl.playMusic()`

<!-- convention-summary-start -->
### SoundPlayerModuleImpl.playMusic Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl.playMusic Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
playMusic(id: string, loop = true, volume?: number): CustomAudioClipModule | null {
    volume = (this.isMuteMusic || !this.isEnableBGM) ? 0 : volume > 0 ? volume : this.musicVolume;
    log(`[SoundPlayerImpl] Play music ${id}`);
    return this._soundPlayer.playMusic(id, loop, volume);
}
```
