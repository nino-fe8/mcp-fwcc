---
id: "cc_slot_module:GameDataStore:method:setGameModeDataMap"
title: "GameDataStore.setGameModeDataMap() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setGameModeDataMap"]
---

# `GameDataStore.setGameModeDataMap(key: string, value: any): void`

<!-- convention-summary-start -->
### GameDataStore.setGameModeDataMap() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.setGameModeDataMap() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
setGameModeDataMap(key: string, value: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Sets key-value pair inside the current mode's cached session object.

---

## 3. Un-truncated Source Code Implementation
```typescript
setGameModeDataMap(key: string, value: any): void {
    const data = this.gameModeData.get(this.currentGameMode) || {};
    data[key] = value;
}
```
