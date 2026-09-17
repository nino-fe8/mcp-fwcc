---
id: "cc_slot_module:TurboButton:methods:playSfxTurbo"
title: "TurboButton.playSfxTurbo Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "playSfxTurbo"]
---

# 📖 `TurboButton.playSfxTurbo()`

<!-- convention-summary-start -->
### TurboButton.playSfxTurbo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.playSfxTurbo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays either dedicated `sfxTurboOn`/`sfxTurboOff` sound clips or fallback generic button click SFX.

```typescript
public playSfxTurbo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxTurbo(): void {
    if (!this.soundPlayer) {
        return;
    }
    const active = this.turboModel.active;
    if (this.sfxTurboOn && this.sfxTurboOff) {
        this.soundPlayer.playSfx(active ? this.sfxTurboOff : this.sfxTurboOn);
    } else {
        this.soundPlayer.playSFXClick();
    }
}
```
