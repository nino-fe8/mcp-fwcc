---
id: "cc_slot_module:WaitingSceneModule:methods:onDestroy"
title: "WaitingSceneModule.onDestroy Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `WaitingSceneModule.onDestroy()`

<!-- convention-summary-start -->
### WaitingSceneModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WaitingSceneModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.waitingSceneData, this);
}
```
