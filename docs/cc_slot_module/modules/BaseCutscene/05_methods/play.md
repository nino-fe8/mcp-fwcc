---
id: "cc_slot_module:BaseCutscene:methods:play"
title: "BaseCutscene.play Method"
category: "cc_slot_module"
tags: ["BaseCutscene", "base_cutscene", "cc_slot_module", "methods", "play"]
---

# 📖 `BaseCutscene.play()`

<!-- convention-summary-start -->
### BaseCutscene.play Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseCutscene.play Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Entry point for starting a cutscene. Emits full display signal, displays node, and calls `enter()`.

```typescript
public play(content?: any, callback?: Function): void
```

---

## 2. Complete Source Code Implementation

```typescript
play(content?: any, callback?: Function): void {
    if (this.fullDisplay) {
        // delay a frame to ensure the game logic flow is finished
        this.scheduleOnce(() => {
            this.eventManager.emit(GameUIEvents.CUTSCENES.SHOW_FULL_DISPLAY_CUTSCENE, content);
        });
    }
    this.content = content;
    this.callback = callback;
    this.show();
    this.enter();
}
```
