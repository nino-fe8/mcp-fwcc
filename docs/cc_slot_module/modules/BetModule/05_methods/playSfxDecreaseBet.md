---
id: "cc_slot_module:BetModule:methods:playSfxDecreaseBet"
title: "BetModule.playSfxDecreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "playSfxDecreaseBet", "audio"]
---

# 📖 `BetModule.playSfxDecreaseBet()`

<!-- convention-summary-start -->
### BetModule.playSfxDecreaseBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.playSfxDecreaseBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays bet decrement sound effect or falls back to generic click SFX.

```typescript
public playSfxDecreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxDecreaseBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxDecreaseBetId) {
        this.soundPlayer.playSfx(this.sfxDecreaseBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
