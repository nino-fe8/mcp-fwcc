---
id: "cc_slot_module:ExtraBetModule:methods:playSfxIncreaseExtraBet"
title: "ExtraBetModule.playSfxIncreaseExtraBet Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "playSfxIncreaseExtraBet", "audio"]
---

# 📖 `ExtraBetModule.playSfxIncreaseExtraBet()`

<!-- convention-summary-start -->
### ExtraBetModule.playSfxIncreaseExtraBet Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.playSfxIncreaseExtraBet Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays sound effect for extra bet increment.

```typescript
public playSfxIncreaseExtraBet(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxIncreaseExtraBet(): void {
    if (!this.soundPlayer) {
        return;
    }
    if (this.sfxIncreaseExtraBetId) {
        this.soundPlayer.playSfx(this.sfxIncreaseExtraBetId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
