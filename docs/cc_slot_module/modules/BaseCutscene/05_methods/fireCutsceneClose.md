---
id: "cc_slot_module:BaseCutscene:methods:fireCutsceneClose"
title: "BaseCutscene.fireCutsceneClose Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "fireCutsceneClose"]
---

# 📖 `BaseCutscene.fireCutsceneClose()`

<!-- convention-summary-start -->
### BaseCutscene.fireCutsceneClose Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene.fireCutsceneClose Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches close signals to `GameEventManager` and `GameLogic`.

```typescript
public fireCutsceneClose(): void
```

---

## 2. Complete Source Code Implementation

```typescript
fireCutsceneClose(): void {
    if (this.fullDisplay) {
        this.eventManager.emit(GameUIEvents.CUTSCENES.HIDE_FULL_DISPLAY_CUTSCENE);
    }
    this.gameLogic.emit(GameLogicUIEvents.ON_CUTSCENE_CLOSE, this.cutsceneType);
}
```
