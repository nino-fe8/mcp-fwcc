---
id: "cc_slot_module:IntroGameModule:methods:playSfxClick"
title: "IntroGameModule.playSfxClick Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "playSfxClick"]
---

# 📖 `IntroGameModule.playSfxClick()`

<!-- convention-summary-start -->
### IntroGameModule.playSfxClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.playSfxClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Plays button click sound effect through injected `soundPlayer`.

```typescript
public playSfxClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxClick(): void {
    this.soundPlayer && this.soundPlayer.playSFXClick();
}
```
