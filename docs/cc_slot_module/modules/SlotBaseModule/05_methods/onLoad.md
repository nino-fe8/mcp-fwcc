---
id: "cc_slot_module:SlotBaseModule:methods:onLoad"
title: "SlotBaseModule.onLoad Method"
category: "cc_slot_module"
tags: ["SlotBaseModule", "slot_base_module", "cc_slot_module", "methods", "onLoad"]
---

# 📖 `SlotBaseModule.onLoad()`

<!-- convention-summary-start -->
### SlotBaseModule.onLoad Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotBaseModule.onLoad Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Base engine initialization lifecycle method that discovers the game ID, injects services via `applyInjections`, listens to `RESET_ALL_EFFECT_AND_TASKS`, and delegates to `onLoadExtend()` and `registerEvents()`.

```typescript
public onLoad(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoad(): void {
    const gameId = NodeUtils.getGameIdFromNode(this.node);
    applyInjections(this, gameId);
    if (this.gameLogic) {
        this.gameLogic.on("RESET_ALL_EFFECT_AND_TASKS", this.resetAllEffectAndTasks, this);
    }
    
    this.onLoadExtend();
    this.registerEvents();
}
```
