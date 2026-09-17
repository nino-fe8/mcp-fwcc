---
id: "cc_slot_module:SlotSoundPlayerModule:method:forcePlayMusicBGM"
title: "SlotSoundPlayerModule.forcePlayMusicBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "forcePlayMusicBGM", "audio", "emergency_stop"]
---

# `SlotSoundPlayerModule.forcePlayMusicBGM(gameMode?: number): void`

<!-- convention-summary-start -->
### SlotSoundPlayerModule.forcePlayMusicBGM() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule.forcePlayMusicBGM() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public forcePlayMusicBGM(gameMode?: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Cancels active crossfade tween: `this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop()`.
2. Stops any playing transition stinger SFX: `this.stopSfx(this._sfxTransition)`.
3. Instantly restores volume to `this.musicVolume` via `this.fadeMusicTo(0, this.musicVolume)`.
4. Starts the requested mode BGM: `this.playMainBGM(gameMode)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
forcePlayMusicBGM(gameMode?: number): void {
    this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
    this.stopSfx(this._sfxTransition);

    if (!this.isMuteMusic && this.isEnableBGM) {
        this.fadeMusicTo(0, this.musicVolume);
    }

    this.playMainBGM(gameMode);
}
```
