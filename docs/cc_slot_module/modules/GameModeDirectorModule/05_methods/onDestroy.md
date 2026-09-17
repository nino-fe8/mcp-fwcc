---
id: "cc_slot_module:GameModeDirectorModule:method:onDestroy"
title: "GameModeDirectorModule.onDestroy() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onDestroy", "cleanup"]
---

# `GameModeDirectorModule.onDestroy(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.onDestroy() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onDestroy() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
onDestroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Destroys and cleans up `this.moduleEvent` scoped bus.
2. Stops active `this._tweenDelayTimeScript` tween.
3. Invokes `super.onDestroy()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onDestroy(): void {
    if (this.moduleEvent) {
        this.moduleEvent.destroy();
        this.moduleEvent = null;
    }
    this._tweenDelayTimeScript && this._tweenDelayTimeScript.stop();
    this._tweenDelayTimeScript = null;
    super.onDestroy();
}
```
