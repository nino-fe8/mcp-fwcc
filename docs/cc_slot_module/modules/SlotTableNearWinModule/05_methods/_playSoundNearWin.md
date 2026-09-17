---
id: "cc_slot_module:SlotTableNearWinModule:method:_playSoundNearWin"
title: "SlotTableNearWinModule._playSoundNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "_playSoundNearWin"]
---

# 🚀 `SlotTableNearWinModule._playSoundNearWin(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule._playSoundNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule._playSoundNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
private _playSoundNearWin(): void
```

---

## 2. Algorithmic Steps

Plays looping SFX `this.soundNearWinId` via `this.soundPlayer`.

---

## 3. Full Source Code

```typescript
_playSoundNearWin(): void {
    this.soundPlayer && this.soundPlayer.playSfx(this.soundNearWinId);
}
```
