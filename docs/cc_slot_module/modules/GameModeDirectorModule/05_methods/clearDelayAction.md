---
id: "cc_slot_module:GameModeDirectorModule:method:clearDelayAction"
title: "GameModeDirectorModule.clearDelayAction() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "clearDelayAction"]
---

# `GameModeDirectorModule.clearDelayAction(): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.clearDelayAction() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.clearDelayAction() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
clearDelayAction(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Cancels scheduled `_delayActionCB` callback on the component to prevent timers firing across spins.

---

## 3. Un-truncated Source Code Implementation
```typescript
clearDelayAction(): void {
    if (this._delayActionCB) {
        this.unschedule(this._delayActionCB);
        this._delayActionCB = null;
    }
}
```
