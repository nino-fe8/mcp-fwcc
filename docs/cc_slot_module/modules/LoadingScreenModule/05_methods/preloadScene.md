---
id: "cc_slot_module:LoadingScreenModule:methods:preloadScene"
title: "LoadingScreenModule.preloadScene Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "preloadScene"]
---

# 📖 `LoadingScreenModule.preloadScene()`

<!-- convention-summary-start -->
### LoadingScreenModule.preloadScene Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.preloadScene Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
preloadScene(): void {
    this.preloadGameScene = true;
    cc.director.preloadScene(this.updatedScene, (completedCount, totalCount) => {
        if (totalCount > 0) {
            this.totalPercent = completedCount / totalCount;
        }
    }, (error) => {
        if (error) {
            handleFlowOutGame();
        } else {
            if (!this.isBackToLobby) {
                const delay = this.progressBar.progress >= 1 ? 0.1 : 0.5;
                this.setProgressFull(delay, () => {
                    director.loadScene(this.updatedScene);
                });
            }
        }
    });
}
```
