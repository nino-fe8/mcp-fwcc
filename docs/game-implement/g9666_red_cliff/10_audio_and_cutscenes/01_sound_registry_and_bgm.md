---
id: "game-implement:9666:audio:sound_registry"
title: "Red Cliff (g9666) Sound Registry & BGM Audio Specification"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "SlotSoundPlayer9666", "audio", "sfx", "bgm"]
---

# 🎵 Red Cliff (g9666) Sound Registry & BGM Audio Specification

<!-- convention-summary-start -->
### Red Cliff (g9666) Sound Registry & BGM Audio Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Sound Registry & BGM Audio Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 10_audio_and_cutscenes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Sound Track Catalog

| Sound ID | Clip Name | Type | Trigger Condition | Loop |
| :--- | :--- | :---: | :--- | :---: |
| `bgm_normal` | `bgm_base_game.mp3` | BGM | Base Game background music | Yes |
| `bgm_freegame` | `bgm_free_spins.mp3` | BGM | Free Spins mode active | Yes |
| `sfx_spin` | `spin_click.mp3` | SFX | User clicks spin button | No |
| `sfx_reel_stop` | `reel_stop.mp3` | SFX | Each column stops spinning | No |
| `sfx_symbol_explode` | `cascade_explode.mp3` | SFX | Winning symbol explosion | No |
| `sfx_multiplier_fly` | `multiplier_collect.mp3` | SFX | Wild multiplier flies to banner | No |
| `sfx_jackpot_token` | `token_collect.mp3` | SFX | Hero token flies to Jackpot HUD | No |
| `sfx_bigwin` | `big_win_cheer.mp3` | SFX | Win amount $\ge 20\times \text{Bet}$ | No |
