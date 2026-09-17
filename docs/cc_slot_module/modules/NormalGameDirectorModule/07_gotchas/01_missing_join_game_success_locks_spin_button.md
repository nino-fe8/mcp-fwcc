---
id: "cc_slot_module:NormalGameDirectorModule:gotcha:missing_join_game_success_locks_spin_button"
title: "Gotcha: Missing JOIN_GAME_SUCCESS Locks Spin Button"
category: "cc_slot_module"
tags: ["NormalGameDirectorModule", "normal_game_director", "cc_slot_module", "gotchas", "JOIN_GAME_SUCCESS"]
---

# ⚠️ Gotcha: Missing JOIN_GAME_SUCCESS Locks Spin Button

<!-- convention-summary-start -->
### Gotcha: Missing JOIN_GAME_SUCCESS Locks Spin Button Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Missing JOIN_GAME_SUCCESS Locks Spin Button.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Defect Symptom
After the loading screen closes, the Spin Button remains greyed out and unclickable.

---

## 2. Root Cause Analysis
`NormalGameDirectorModule` relies on `onJoinGameSuccess()` to emit `GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS`. If this handler is overridden without calling `super.onJoinGameSuccess(data)` or if the server payload lacks required fields, the UI button manager never receives authorization to enable player interactions.

---

## 3. Recommended Resolution
Always ensure `onJoinGameSuccess` calls `super.onJoinGameSuccess(data)`:
```typescript
onJoinGameSuccess(data: any): void {
    super.onJoinGameSuccess(data);
    // Custom post-join logic here
}
```
