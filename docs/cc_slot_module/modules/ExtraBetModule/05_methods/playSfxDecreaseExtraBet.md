---
id: "cc_slot_module:ExtraBetModule:methods:playSfxDecreaseExtraBet"
title: "ExtraBetModule.playSfxDecreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "playSfxDecreaseExtraBet", "audio"]
---

# 📖 `ExtraBetModule.playSfxDecreaseExtraBet()`

<!-- convention-summary-start -->
### ExtraBetModule.playSfxDecreaseExtraBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.playSfxDecreaseExtraBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect for extra bet decrement.

```typescript
public playSfxDecreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxDecreaseExtraBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxDecreaseExtraBetId) {
        this.soundPlayer.playSfx(this.sfxDecreaseExtraBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
