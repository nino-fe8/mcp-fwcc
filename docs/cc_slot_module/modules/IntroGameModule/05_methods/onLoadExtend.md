---
id: "cc_slot_module:IntroGameModule:methods:onLoadExtend"
title: "IntroGameModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["IntroGameModule", "intro_game_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `IntroGameModule.onLoadExtend()`

<!-- convention-summary-start -->
### IntroGameModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for IntroGameModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Subscribes to `JOIN_GAME_SUCCESS` and calls `this.init()`.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.GAME_MODE.JOIN_GAME_SUCCESS, this.joinGameSuccess, this);
    this.init();
}
```
