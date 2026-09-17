---
id: "cc_slot_module:GameDataStore:method:getCountMoneyTime"
title: "GameDataStore.getCountMoneyTime() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "getCountMoneyTime"]
---

# `GameDataStore.getCountMoneyTime(level: number): number`

<!-- convention-summary-start -->
### GameDataStore.getCountMoneyTime() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.getCountMoneyTime() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
getCountMoneyTime(level: number): number
```

---

## 2. Detailed Algorithmic Execution Logic
Queries money count-up roll duration mapping from `this.gameConfig.WIN_LEVEL_CONFIG.COUNT_MONEY_TIME` (default: `{ 1: 0, 2: 0, 3: 4, 4: 6 }`).

---

## 3. Un-truncated Source Code Implementation
```typescript
getCountMoneyTime(level: number): number {
    const map = this.gameConfig && this.gameConfig.WIN_LEVEL_CONFIG && this.gameConfig.WIN_LEVEL_CONFIG.COUNT_MONEY_TIME || { 1: 0, 2: 0, 3: 4, 4: 6 };
    return map[level] || 0;
}
```
