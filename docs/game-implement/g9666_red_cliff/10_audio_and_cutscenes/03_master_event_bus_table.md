---
id: "game-implement:9666:audio:master_events_table"
title: "Red Cliff (g9666) Master Event Bus Dictionary"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "events", "event_bus", "listeners", "emitters"]
---

# 📡 Red Cliff (g9666) Master Event Bus Dictionary

<!-- convention-summary-start -->
### Red Cliff (g9666) Master Event Bus Dictionary Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) Master Event Bus Dictionary.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 10_audio_and_cutscenes
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


| Event Name | Emitter Module | Primary Listener | Payload Schema | Action / Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `TABLE_START_SPIN` | `NormalGameDirector` | `SlotTableModule9666` | `void` | Initiates reel spin physics |
| `TABLE_STOP_SPIN` | `NormalGameDirector` | `SlotTableModule9666` | `{ matrix: any[] }` | Delivers target reel stopping symbols |
| `TABLE_FAST_STOP` | `TurboButton` / `Director` | `SlotTableModule9666` | `void` | Skips reel deceleration and drops instantly |
| `UPDATE_MEGAWAY` | `CompositeCascade9666` | `UIManagerModule9666` | `number` (Ways count) | Updates Megaways counter HUD |
| `UPDATE_JACKPOT_COLLECTION` | `CompositeCascade9666` | `JackpotCollectionModule9666` | `void` | Initiates hero token fly-in animations |
| `STACK_WILD_LANDED` | `CompositeCascade9666` | `StackWildModule9666` | `void` | Evaluates full-column Guan Yu expansion |
| `COLLECT_WILD_MULTIPLIER` | `SlotSymbolModule9666` | `CollectMultiModule9666` | `{ multiplier: number, node: cc.Node }` | Flies multiplier badge to consolidated multiplier banner |
