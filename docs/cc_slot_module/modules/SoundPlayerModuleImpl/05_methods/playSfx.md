---
id: "cc_slot_module:SoundPlayerModuleImpl:methods:playSfx"
title: "SoundPlayerModuleImpl.playSfx Method"
category: "cc_slot_module"
tags: ["SoundPlayerModuleImpl", "sound_player_module_impl", "cc_slot_module", "methods", "playSfx"]
---

# 📖 `SoundPlayerModuleImpl.playSfx()`

<!-- convention-summary-start -->
### SoundPlayerModuleImpl.playSfx Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SoundPlayerModuleImpl.playSfx Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
playSfx(sfx: string, loop = false, volume?: number): cc.AudioSource | HowlerDataModule | null {
    volume = (!this.isEnableSFX || this.isMuteEffect) ? 0 : (volume || this.sfxVolume);
    log(`[SoundPlayerImpl] Play sfx ${sfx}`);
    return this._soundPlayer.playSfx(sfx, loop, volume);
}
```
