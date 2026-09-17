---
id: "cc_slot_module:GameDataStore:method:getResumeWinAmount"
title: "GameDataStore.getResumeWinAmount() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getResumeWinAmount"]
---

# `GameDataStore.getResumeWinAmount(): number`

<!-- convention-summary-start -->
### GameDataStore.getResumeWinAmount() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getResumeWinAmount() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getResumeWinAmount(): number
```

---

## 2. Detailed Algorithmic Execution Logic
Returns win amount to restore upon game reconnection: `this.playSession ? this.playSession.winAmountPS : 0`.

---

## 3. Un-truncated Source Code Implementation
```typescript
getResumeWinAmount(): number {
    let winAmountPS = this.playSession ? this.playSession.winAmountPS : 0;
    return winAmountPS;
}
```
