---
id: "cc_slot_module:LoadingScreenModule:methods:setProgressFull"
title: "LoadingScreenModule.setProgressFull Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "setProgressFull"]
---

# 📖 `LoadingScreenModule.setProgressFull()`

<!-- convention-summary-start -->
### LoadingScreenModule.setProgressFull Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.setProgressFull Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
setProgressFull(delay: number, callback: () => void): void {
    if (this.tweenFullProgress) {
        this.tweenFullProgress.stop();
    }
    this.tweenFullProgress = tween(this)
    this.tweenFullProgress
        .to(delay, { CurrentProgress: 1 }, { easing: "sineIn" })
        .call(() => {
            this.updateLabelProgressFull();
            callback && callback();
            this.tweenFullProgress = null;
        })
        .start();
}
```
