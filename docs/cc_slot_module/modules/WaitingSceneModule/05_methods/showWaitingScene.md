---
id: "cc_slot_module:WaitingSceneModule:methods:showWaitingScene"
title: "WaitingSceneModule.showWaitingScene Method"
category: "cc_slot_module"
tags: ["WaitingSceneModule", "waiting_scene_module", "cc_slot_module", "methods", "showWaitingScene"]
---

# 📖 `WaitingSceneModule.showWaitingScene()`

<!-- convention-summary-start -->
### WaitingSceneModule.showWaitingScene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for WaitingSceneModule.showWaitingScene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
showWaitingScene(active: boolean): void {
    this.node.active = active;
    setOpacity(this.node, active ? 255 : 0);
}
```
