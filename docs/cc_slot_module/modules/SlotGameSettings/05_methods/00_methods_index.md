---
id: "cc_slot_module:SlotGameSettings:methods:index"
title: "SlotGameSettings Methods & Accessors Index"
category: "cc_slot_module"
tags: ["SlotGameSettings", "slot_game_settings", "cc_slot_module", "methods", "accessors", "index"]
---

# 📋 SlotGameSettings Methods & Accessors Index

<!-- convention-summary-start -->
### SlotGameSettings Methods & Accessors Index Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotGameSettings Methods & Accessors Index.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


`SlotGameSettings` is a pure TypeScript data registry providing getter and setter accessors:

---

## 1. Accessors Summary Table

| Accessor Signature | Access Type | Return / Parameter Type | Purpose |
| :--- | :--- | :--- | :--- |
| **`isTurboActive`** | Getter / Setter | `boolean` | Controls reel spin duration compression and 2x animation speeds. |
| **`isFastToResult`** | Getter (Readonly) | `boolean` | Evaluates `_gameSpeed === GAME_SPEED_ENUM.INSTANTLY` to skip animations. |
| **`isAutoSpin`** | Getter / Setter | `boolean` | Tracks whether automatic consecutive spin mode is active. |
| **`isTrialMode`** | Getter / Setter | `boolean` | Flags virtual trial play versus real money wagering. |
| **`gameSpeed`** | Getter / Setter | `number` (`GAME_SPEED_ENUM`) | Speed tier: `NORMAL: 0`, `TURBO: 1`, `INSTANTLY: 2`. |
| **`currentGameState`**| Getter / Setter | `number` (`GAME_STATE_ENUM`) | Lifecycle state: `IDLE`, `RESUME`, `WAIT_FOR_RESULT`, `RESULT_RECEIVED`, `SHOW_RESULT`. |
| **`isJoinGameSuccess`**| Getter / Setter | `boolean` | Guards input until WebSocket login finishes. |
| **`bigWinConfig`** | Getter / Setter | `number[] \| null` | Stores optional dynamic big win cutoff ratios from server. |
