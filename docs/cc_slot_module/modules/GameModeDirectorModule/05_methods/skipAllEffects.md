---
id: "cc_slot_module:GameModeDirectorModule:method:skipAllEffects"
title: "GameModeDirectorModule.skipAllEffects() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "skipAllEffects", "FastStop", "onResetScript"]
---

# `GameModeDirectorModule.skipAllEffects(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.skipAllEffects() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.skipAllEffects() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public skipAllEffects(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Invokes `this.clearDelayAction()`: Un-schedules any active `scheduleOnce` callback timer.
2. Invokes `this.onResetScript("ShowResultFinal")`: Triggers fast-forward reset of pending settlement steps.
3. Returns `Promise<void>`.

---

## 3. Un-truncated Source Code Implementation
```typescript
skipAllEffects(): Promise<void> {
    this.clearDelayAction();
    return this.onResetScript("ShowResultFinal");
}
```
