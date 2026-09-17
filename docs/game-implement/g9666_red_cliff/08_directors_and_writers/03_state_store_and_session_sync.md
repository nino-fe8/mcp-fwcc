---
id: "game-implement:9666:directors:state_store_sync"
title: "Red Cliff (g9666) GameDataStore & Session State Synchronization"
category: "game_implement"
game_ids: ["9666", "g9666", "red_cliff"]
tags: ["9666", "GameDataStore9666", "session", "sync", "matrix"]
---

# 💾 Red Cliff (g9666) GameDataStore & Session State Synchronization

<!-- convention-summary-start -->
### Red Cliff (g9666) GameDataStore & Session State Synchronization Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Red Cliff (g9666) GameDataStore & Session State Synchronization.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: game_implement, 08_directors_and_writers
- **Scope & Code Paths**: `file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Data/GameDataStore9666.ts`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


- **Source File**: [`GameDataStore9666.ts`](file:///c:/Users/ADMIN/lamnino/cc20-new-all-in-one/assets/cc-release-slot/cc1-red-cliff/scripts/Data/GameDataStore9666.ts)

---

## 1. Core State Properties

- `playSession.matrix`: 6-column vertical matrix array.
- `playSession.horizontalMatrix`: 4-element top sub-reel array.
- `playSession.payLines`: List of active winning payline definitions.
- `playSession.respinStep`: Current cascade iteration index ($0, 1, 2, \dots$).
- `playSession.jackpotCollection`: Array of collected tokens per hero symbol (`S1..S4`).
