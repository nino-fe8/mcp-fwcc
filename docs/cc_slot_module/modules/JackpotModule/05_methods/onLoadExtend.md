---
id: "cc_slot_module:JackpotModule:methods:onLoadExtend"
title: "JackpotModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `JackpotModule.onLoadExtend()`

<!-- convention-summary-start -->
### JackpotModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds event handlers and initializes observers for data models.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.JACKPOT.PAUSE_JACKPOT, this.pauseJackpot, this);
    this.eventManager.on(GameUIEvents.JACKPOT.RESUME_JACKPOT, this.resumeJackpot, this);
    this.eventManager.on(GameUIEvents.JACKPOT.UPDATE_JACKPOT_VALUE, this.updateJackpotValue, this);

    this.jackpotData = this.gameLogic.getDataModel()[this.modelName];
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;

    this.setupJackpotObserver();
    this.setupObserver();
}
```
