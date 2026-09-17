---
id: "cc_slot_module:BaseCutscene:gotchas:fullscreen_input_blocking_leak"
title: "Gotcha: Stale Full-Display Input Blocking on Interruption"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "gotchas", "input_leak", "full_display"]
---

# ⚠️ Gotcha: Stale Full-Display Input Blocking on Interruption

<!-- convention-summary-start -->
### Gotcha: Stale Full-Display Input Blocking on Interruption Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Stale Full-Display Input Blocking on Interruption.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`BaseCutscene.play()` schedules `this.eventManager.emit(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE)` to disable touches on spin buttons. If the scene transitions or the cutscene node is destroyed abruptly without calling `fireCutsceneClose()`, `HIDE_FULL_DISPLAY_CUTSCENE` is never emitted, leaving HUD buttons permanently unresponsive.

---

## 2. Solution

In custom cutscenes, override `onDestroy()` to call `this.fireCutsceneClose()` as a defensive fallback:
```typescript
onDestroy(): void {
    if (this.node.active) {
        this.fireCutsceneClose();
    }
    super.onDestroy && super.onDestroy();
}
```
