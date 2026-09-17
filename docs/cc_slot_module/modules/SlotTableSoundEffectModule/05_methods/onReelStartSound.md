---
id: "cc_slot_module:SlotTableSoundEffectModule:method:onReelStartSound"
title: "SlotTableSoundEffectModule.onReelStartSound Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "onReelStartSound"]
---

# 🚀 `SlotTableSoundEffectModule.onReelStartSound(): void`

<!-- convention-summary-start -->
### SlotTableSoundEffectModule.onReelStartSound Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule.onReelStartSound Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public onReelStartSound(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit('REEL_START_SOUND')` by `SlotTableModule` at the beginning of each reel spin loop.

---

## 3. Algorithmic Steps

Resets `countBonus = 0`, `countScatter = 0`, and `countJackpot = 0`.

---

## 4. Full Source Code

```typescript
onReelStartSound(): void {
    this.countBonus = 0;
    this.countScatter = 0;
    this.countJackpot = 0;
}
```
