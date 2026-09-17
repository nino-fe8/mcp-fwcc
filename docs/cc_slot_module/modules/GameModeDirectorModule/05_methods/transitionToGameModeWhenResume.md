---
id: "cc_slot_module:GameModeDirectorModule:method:transitionToGameModeWhenResume"
title: "GameModeDirectorModule.transitionToGameModeWhenResume() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "transitionToGameModeWhenResume", "reconnection"]
---

# `GameModeDirectorModule.transitionToGameModeWhenResume(mode: number): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule.transitionToGameModeWhenResume() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.transitionToGameModeWhenResume() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
transitionToGameModeWhenResume(_mode: number): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Default behavior resolves immediately (`Promise.resolve()`) to skip cutscenes and accelerate loading upon reconnection. Subclasses can override for custom resume transitions.

---

## 3. Un-truncated Source Code Implementation
```typescript
transitionToGameModeWhenResume(_mode: number): Promise<void> {
    return Promise.resolve();
}
```
