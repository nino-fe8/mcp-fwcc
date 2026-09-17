---
id: "cc_slot_module:BetModule:methods:playSfxIncreaseBet"
title: "BetModule.playSfxIncreaseBet Method"
category: "cc_slot_module"
tags: ["BetModule", "bet_module", "cc_slot_module", "methods", "playSfxIncreaseBet", "audio"]
---

# 📖 `BetModule.playSfxIncreaseBet()`

<!-- convention-summary-start -->
### BetModule.playSfxIncreaseBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetModule.playSfxIncreaseBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays bet increment sound effect or falls back to generic click SFX.

```typescript
public playSfxIncreaseBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxIncreaseBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxIncreaseBetId) {
        this.soundPlayer.playSfx(this.sfxIncreaseBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
