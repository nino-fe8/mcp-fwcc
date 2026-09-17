---
id: "cc_slot_module:PaylineInfoModule:methods:shouldWorkInCurrentGameMode"
title: "PaylineInfoModule.shouldWorkInCurrentGameMode Method"
category: "cc_slot_module"
tags: ["PaylineInfoModule", "payline_info_module", "cc_slot_module", "methods", "shouldWorkInCurrentGameMode"]
---

# 📖 `PaylineInfoModule.shouldWorkInCurrentGameMode()`

<!-- convention-summary-start -->
### PaylineInfoModule.shouldWorkInCurrentGameMode Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PaylineInfoModule.shouldWorkInCurrentGameMode Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Checks whether the component is authorized to display in the active game mode.

```typescript
protected shouldWorkInCurrentGameMode(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
protected shouldWorkInCurrentGameMode(): boolean {
    if (this.useAcrossAllGameModes) {
        return true;
    }
    
    return this.dataStore.currentGameMode === this.gameMode;
}
```
