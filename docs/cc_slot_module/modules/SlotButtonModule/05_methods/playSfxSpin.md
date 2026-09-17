---
id: "cc_slot_module:SlotButtonModule:methods:playSfxSpin"
title: "SlotButtonNormal.playSfxSpin Method"
category: "cc_slot_module"
tags: ["SlotButtonModule", "SlotButtonNormal", "cc_slot_module", "methods", "playSfxSpin", "audio"]
---

# 📖 `SlotButtonNormal.playSfxSpin()`

<!-- convention-summary-start -->
### SlotButtonNormal.playSfxSpin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotButtonNormal.playSfxSpin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays spin SFX if allowed by current button state (`NORMAL` or `HOVER`) and `skipSound` is false.

```typescript
public playSfxSpin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxSpin(): void {
    const allowStatePlay = this.state === SPIN_BUTTON_STATE_ENUM.NORMAL || this.state === SPIN_BUTTON_STATE_ENUM.HOVER;
    if (!this.soundPlayer || this.skipSound || !allowStatePlay) {
        return;
    }

    if (this.sfxSpinId) {
        this.soundPlayer.playSfx(this.sfxSpinId);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
