---
id: "cc_slot_module:SlotTableNearWinModule:method:_stopSoundNearWin"
title: "SlotTableNearWinModule._stopSoundNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_stopSoundNearWin"]
---

# 🚀 `SlotTableNearWinModule._stopSoundNearWin(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._stopSoundNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._stopSoundNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _stopSoundNearWin(): void
```

---

## 2. Algorithmic Steps

Halts playing SFX `this.soundNearWinId` via `this.soundPlayer`.

---

## 3. Full Source Code

```typescript
_stopSoundNearWin(): void {
    this.soundPlayer && this.soundPlayer.stopSfx(this.soundNearWinId);
}
```
