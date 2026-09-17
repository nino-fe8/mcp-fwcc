---
id: "game-implement:9666:anticipation:audio_ducking"
title: "Red Cliff (g9666) Audio Ducking, Tension Loops & Near Win SFX"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "audio_ducking", "sound", "near_win", "sfxNearWinMissId"]
---

# 🎵 Red Cliff (g9666) Audio Ducking & Suspense Audio Architecture

<!-- convention-summary-start -->
### Red Cliff (g9666) Audio Ducking & Suspense Audio Summary

- **Core Architecture / Purpose**: Detailed analysis of real-time audio ducking and SFX dispatching during near-win suspense states.
- **Key Mechanisms & Design**: Covers `bgmDuckVolumeRatio = 0.3`, `bgmDuckFadeTime = 0.2`, `soundNearWinId = "NEARWIN_REFILL"`, and `sfxNearWinMissId = "NEARWIN_MISS"`.
- **Domain Capabilities**: game_implement, 07_anticipation_and_near_win
- **Scope & Code Paths**: `assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableNearWinRefillModule9666.ts`
- **Related Docs**: [01_near_win_refill_mechanics.md](./01_near_win_refill_mechanics.md)
<!-- convention-summary-end -->

---

## 1. Audio Ducking Flowchart

```mermaid
sequenceDiagram
    autonumber
    participant Engine as SlotTableNearWinRefillModule9666
    participant Audio as SlotSoundPlayerModule
    participant BGM as Background Music Track
    participant SFX as SFX Track

    Engine->>Engine: 3 Scatters on Board & Column drops
    Engine->>Audio: fadeMusicTo(0.2s, volume * 0.3)
    Note over BGM: BGM volume ducks down to 30%
    Engine->>Audio: playSfx("NEARWIN_REFILL", loop = true)
    Note over SFX: Heartbeat / war drum suspense loop plays

    alt 4th Scatter Lands
        Engine->>Audio: fadeMusicTo(0.2s, volume * 1.0)
        Engine->>Audio: stopSfx("NEARWIN_REFILL")
        Engine->>Audio: playSfx("SCATTER_MATCH")
        Note over Audio: Triggers Free Game Fanfare!
    else 4th Scatter Misses
        Engine->>Audio: fadeMusicTo(0.2s, volume * 1.0)
        Engine->>Audio: stopSfx("NEARWIN_REFILL")
        Engine->>Audio: playSfx("NEARWIN_MISS")
        Note over SFX: Disappointment miss sound effect
    end
```

---

## 2. Audio Ducking Parameters & Tuning

From [`SlotTableNearWinRefillModule9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Table/SlotTableNearWinRefillModule9666.ts):
- **`bgmDuckVolumeRatio: 0.3`**: Drops BGM to exactly 30% of user-configured volume to give the suspense SFX maximum acoustic prominence.
- **`bgmDuckFadeTime: 0.2`**: Smooth 200ms linear fade in/out preventing audio pops.
- **`sfxNearWinMissId: "NEARWIN_MISS"`**: Played if the final scatter count remains $< 4$.
