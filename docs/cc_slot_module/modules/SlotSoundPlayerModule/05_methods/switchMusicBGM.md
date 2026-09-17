---
id: "cc_slot_module:SlotSoundPlayerModule:method:switchMusicBGM"
title: "SlotSoundPlayerModule.switchMusicBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "switchMusicBGM", "crossfade", "audio", "bgm"]
---

# `SlotSoundPlayerModule.switchMusicBGM(): void`

<!-- convention-summary-start -->
### SlotSoundPlayerModule.switchMusicBGM() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule.switchMusicBGM() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public switchMusicBGM(
    nextGameMode: number,
    sfxTransition: string = "",
    fadeTime: number = 0.2,
    delaySwitch: number = 0
): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. If music is enabled and unmuted, calls `this.fadeMusicTo(fadeTime, 0)` to fade out current BGM.
2. If `sfxTransition` is provided, plays transition stinger SFX via `this.playSfx(sfxTransition)`.
3. Cancels any active previous crossfade tween: `this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop()`.
4. Creates and runs a new Cocos `tween(this.node)`:
   * Waits `delaySwitch` seconds.
   * Calls `this.playMainBGM(nextGameMode)`.
   * Calls `this.fadeMusicTo(fadeTime, this.musicVolume)` to restore volume.

---

## 3. Un-truncated Source Code Implementation
```typescript
switchMusicBGM(nextGameMode: number, sfxTransition: string = "", fadeTime: number = 0.2, delaySwitch: number = 0): void {
    if (!this.isMuteMusic && this.isEnableBGM) {
        this.fadeMusicTo(fadeTime, 0);
    }

    if (sfxTransition) {
        this._sfxTransition = sfxTransition;
        this.playSfx(this._sfxTransition);
    }

    this._tweenSwitchMusicBGM && this._tweenSwitchMusicBGM.stop();
    this._tweenSwitchMusicBGM = tween(this.node)
        .delay(delaySwitch)
        .call(() => {
            this.playMainBGM(nextGameMode);

            if (!this.isMuteMusic && this.isEnableBGM) {
                this.fadeMusicTo(fadeTime, this.musicVolume);
            }
        });

    this._tweenSwitchMusicBGM.start();
}
```
