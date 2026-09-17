---
id: "cc_slot_module:UIManagerModule:methods:showJackpotUI"
title: "UIManagerModule.showJackpotUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "showJackpotUI"]
---

# 📖 `UIManagerModule.showJackpotUI()`

<!-- convention-summary-start -->
### UIManagerModule.showJackpotUI Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.showJackpotUI Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Swaps visibility between the real progressive jackpot banner and the demo trial jackpot counter based on `gameSettings.isTrialMode`.

```typescript
public showJackpotUI(): void
```

---

## 2. Complete Source Code Implementation

```typescript
showJackpotUI(): void {
    if (this.gameSettings.isTrialMode) {
        this.setNodeActive(this.jackpot, false);
        this.setNodeActive(this.trialJackpot, true);
    } else {
        this.setNodeActive(this.trialJackpot, false);
        this.setNodeActive(this.jackpot, true);
    }
}
```
