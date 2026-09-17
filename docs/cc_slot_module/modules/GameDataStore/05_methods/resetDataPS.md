---
id: "cc_slot_module:GameDataStore:method:resetDataPS"
title: "GameDataStore.resetDataPS() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "resetDataPS"]
---

# `GameDataStore.resetDataPS(): void`

<!-- convention-summary-start -->
### GameDataStore.resetDataPS() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.resetDataPS() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
resetDataPS(): void
```

---

## 2. Detailed Algorithmic Execution Logic
If `hasPlaySession()` is true, sets `this.playSession.winAmountPS = 0` and `this.playSession.isFinished = true`.

---

## 3. Un-truncated Source Code Implementation
```typescript
resetDataPS(): void {
    if (this.hasPlaySession()) {
        this.playSession.winAmountPS = 0;
        this.playSession.isFinished = true;
    }
}
```
