---
id: "cc_slot_module:SlotTableSoundEffectModule:methods:index"
title: "SlotTableSoundEffectModule Methods Index"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "index"]
---

# 📋 SlotTableSoundEffectModule Methods Index

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Methods Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Methods Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `./onLoadExtend.md`, `./onReelStartSound.md`, `./onReelStopSound.md`
- **Related Docs**: [`onLoadExtend(): void`](./onLoadExtend.md), [`onReelStartSound(): void`](./onReelStartSound.md), [`onReelStopSound(data): void`](./onReelStopSound.md)
<!-- convention-summary-end -->


---

## 1. Declared Methods Summary Table

| Method Signature | Visibility | Purpose |
| :--- | :--- | :--- |
| **[`onLoadExtend(): void`](./onLoadExtend.md)** | `public` | Binds `REEL_START_SOUND` and `REEL_STOP_SOUND` event listeners. |
| **[`onReelStartSound(): void`](./onReelStartSound.md)** | `public` | Resets Scatter, Bonus, and Jackpot counters to `0`. |
| **[`onReelStopSound(data): void`](./onReelStopSound.md)** | `public` | Inspects stopped column matrix and determines SFX to trigger. |
| **[`playSfxReelStop(): void`](./playSfxReelStop.md)** | `public` | Triggers standard reel stop click sound. |
| **[`playSfxSpecialSymbol(flags): void`](./playSfxSpecialSymbol.md)** | `public` | Triggers escalating sound ladder based on special symbol type and count. |
