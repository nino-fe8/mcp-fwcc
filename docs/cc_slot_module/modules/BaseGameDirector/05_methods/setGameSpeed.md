---
id: "cc_slot_module:BaseGameDirector:method:setGameSpeed"
title: "BaseGameDirector.setGameSpeed() Method Specification"
category: "cc_slot_module"
tags: ["BaseGameDirector", "base_game_director", "cc_slot_module", "method", "setGameSpeed", "speed", "turbo", "FTR"]
---

# `BaseGameDirector.setGameSpeed(mode: number): void`

<!-- convention-summary-start -->
### BaseGameDirector.setGameSpeed() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseGameDirector.setGameSpeed() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public setGameSpeed(mode: number): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Forwards the speed change to `this.executor.setGameSpeed(mode)`.
2. Updates `this.executor.gameSpeed`, syncs with `dataStore.setGameSpeed(gameSpeed)`, and updates `gameSettings.gameSpeed`.
3. Subsequent step dispatches will query the director for `_[SPEED]` method variants (e.g. `STOP_REEL_1` or `STOP_REEL_2`).

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameSpeed(mode): void {
    this.executor.setGameSpeed(mode);
}
```
