---
id: "cc_slot_module:SlotTableNearWinModule:gotchas:nearwin_sound_stuck_on_ftr"
title: "Gotcha: NearWin Tension Sound Stuck on Fast Stop"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "gotchas", "sound_stuck", "ftr"]
---

# 🛑 Gotcha: NearWin Tension Sound Stuck on Fast Stop

<!-- convention-summary-start -->
### Gotcha: NearWin Tension Sound Stuck on Fast Stop Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: NearWin Tension Sound Stuck on Fast Stop.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Symptom & Visual Defect

When a player hits the Spin button to trigger Fast-To-Result (FTR) while an anticipation column is rolling, the reels stop instantly, but the looping `NEAR_WIN` tension sound continues playing throughout the win celebration and next spin.

---

## 2. Root Cause & Cocos 2.4 Quirk

In `reelStopNearWin()`:
```typescript
if (context.isFastToResult()) {
    return;
}
```
If FTR triggers after `_playSoundNearWin()` has already executed on column `k`, returning early from `reelStopNearWin` prevents `resetNearWin()` from being called on the subsequent reel steps, leaving the audio loop playing in `SlotSoundPlayerModule`.

---

## 3. Standard Code Fix

Ensure `SlotTableModule.resetAllEffectAndTasks()` explicitly emits `RESET_NEARWIN` to invoke `_stopSoundNearWin()`:

```typescript
resetAllEffectAndTasks(): void {
    super.resetAllEffectAndTasks();
    this.node.emit("RESET_NEARWIN");
}
```
