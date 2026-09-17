---
id: "cc_slot_module:SlotSoundPlayerModule:method:playMainBGM"
title: "SlotSoundPlayerModule.playMainBGM() Method Specification"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "method", "playMainBGM", "bgm", "audio"]
---

# `SlotSoundPlayerModule.playMainBGM(currentGameMode?: number): void`

<!-- convention-summary-start -->
### SlotSoundPlayerModule.playMainBGM() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotSoundPlayerModule.playMainBGM() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public playMainBGM(currentGameMode?: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Maps `currentGameMode` to appropriate BGM sound token:
   * `FREE_GAME` (`2`) ➔ `"BGM_FREE"`.
   * `BONUS_GAME` (`4`) ➔ `"BGM_BONUS"`.
   * Default / `NORMAL_GAME` (`1`) ➔ `"BGM_MAIN"`.
2. Calls `this.playMusic(soundId)` to begin audio playback on loop.

---

## 3. Un-truncated Source Code Implementation
```typescript
playMainBGM(currentGameMode?: number): void {
    let soundId = "BGM_MAIN";
    if (currentGameMode === GAME_MODE_ENUM.FREE_GAME) {
        soundId = "BGM_FREE";
    } else if (currentGameMode === GAME_MODE_ENUM.BONUS_GAME) {
        soundId = "BGM_BONUS";
    }

    this.playMusic(soundId);
}
```
