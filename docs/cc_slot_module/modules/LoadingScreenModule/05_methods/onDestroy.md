---
id: "cc_slot_module:LoadingScreenModule:methods:onDestroy"
title: "LoadingScreenModule.onDestroy Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `LoadingScreenModule.onDestroy()`

<!-- convention-summary-start -->
### LoadingScreenModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.unscheduleAllCallbacks();
    if (this.tweenFullProgress) {
        this.tweenFullProgress.stop();
    }
    this.tweenFullProgress = null;
    if (this.usingLoadHowl) {
        JsbUtils.unregisterLoadHowl();
    }
}
```
