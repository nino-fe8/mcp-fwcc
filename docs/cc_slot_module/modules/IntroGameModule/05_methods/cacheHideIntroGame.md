---
id: "cc_slot_module:IntroGameModule:methods:cacheHideIntroGame"
title: "IntroGameModule.cacheHideIntroGame Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "cacheHideIntroGame"]
---

# 📖 `IntroGameModule.cacheHideIntroGame()`

<!-- convention-summary-start -->
### IntroGameModule.cacheHideIntroGame Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.cacheHideIntroGame Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Serializes user preference into `sys.localStorage`.

```typescript
public cacheHideIntroGame(): void
```

---

## 2. Complete Source Code Implementation

```typescript
cacheHideIntroGame(): void {
    const cacheValue = {};
    cacheValue[this._gameId] = this._isHideIntroGame;
    sys.localStorage.setItem("HideIntroGame", JSON.stringify(cacheValue));
}
```
