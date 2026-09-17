---
id: "cc_slot_module:LoadingScreenModule:methods:addHomeEvent"
title: "LoadingScreenModule.addHomeEvent Method"
category: "cc_slot_module"
tags: ["LoadingScreenModule", "loading_screen_module", "cc_slot_module", "methods", "addHomeEvent"]
---

# 📖 `LoadingScreenModule.addHomeEvent()`

<!-- convention-summary-start -->
### LoadingScreenModule.addHomeEvent Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for LoadingScreenModule.addHomeEvent Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Complete Source Code Implementation

```typescript
addHomeEvent(): void {
    if (this.homeBtn) {
        this.homeBtn.active = false;
        const { LOGIN_IFRAME } = environment.getConfig();
        if (!LOGIN_IFRAME) {
            this.scheduleOnce(() => {
                this.homeBtn.active = true;
                this.homeBtn.off('click');
                this.homeBtn.on('click', () => {
                    if (this.isBackToLobby) {
                        return;
                    }
                    gameCommonUtils.handleCloseGameIframe();
                    this.isBackToLobby = true;
                });
            }, 10);
        }
    }
}
```
