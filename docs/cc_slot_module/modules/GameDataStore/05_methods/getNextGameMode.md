---
id: "cc_slot_module:GameDataStore:method:getNextGameMode"
title: "GameDataStore.getNextGameMode() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getNextGameMode"]
---

# `GameDataStore.getNextGameMode(): number`

<!-- convention-summary-start -->
### GameDataStore.getNextGameMode() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getNextGameMode() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getNextGameMode(): number
```

---

## 2. Detailed Algorithmic Execution Logic
Parses `this.playSession.nextMode` into an integer and returns it.

---

## 3. Un-truncated Source Code Implementation
```typescript
getNextGameMode(): number {
    return parseInt(this.playSession.nextMode);
}
```
