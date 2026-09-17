---
id: "cc_slot_module:LoadingScreenModule:methods:startLoadScene"
title: "LoadingScreenModule.startLoadScene Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "startLoadScene"]
---

# 📖 `LoadingScreenModule.startLoadScene()`

<!-- convention-summary-start -->
### LoadingScreenModule.startLoadScene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.startLoadScene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
startLoadScene(): void {
    this.node.active = true;
    setOpacity(this.node, 255);
    this.preloadScene();
}
```
