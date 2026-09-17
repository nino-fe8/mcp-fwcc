---
id: "cc_slot_module:SlotSoundPlayerModule:gotcha:stale_crossfade_tween_conflict"
title: "Gotcha: Stale Crossfade Tween Volume Conflict on Rapid Mode Skips"
category: "cc_slot_module"
tags: ["SlotSoundPlayerModule", "slot_sound_player", "cc_slot_module", "gotchas", "crossfade", "tween_conflict", "forcePlayMusicBGM"]
---

# 🛑 Gotcha: Stale Crossfade Tween Volume Conflict on Rapid Mode Skips

<!-- convention-summary-start -->
### Gotcha: Stale Crossfade Tween Volume Conflict on Rapid Mode Skips Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Stale Crossfade Tween Volume Conflict on Rapid Mode Skips.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Visual Defect
If a player enters Free Game and immediately clicks Fast Stop / Skip on the intro banner, the Free Game BGM starts, but seconds later its volume drops to 0 or Normal Game BGM starts playing simultaneously.

---

## 2. Root Cause & Technical Defect
`switchMusicBGM()` uses a Cocos tween (`this._tweenSwitchMusicBGM`) with a `delaySwitch` parameter. If a skip occurs before the tween's `.call()` executes, the stale delayed callback fires and overrides volume or tracks.

---

## 3. Standard Code Solution & Fix
Always call `forcePlayMusicBGM(gameMode)` when skipping cutscenes or fast-forwarding mode switches:

```typescript
// Inside CutsceneController on Skip Button click:
onSkipFreeGameIntro(): void {
    this.soundPlayer.forcePlayMusicBGM(GAME_MODE_ENUM.FREE_GAME);
    this.closeIntroDialog();
}
```
