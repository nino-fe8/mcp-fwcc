---
id: "cc_slot_module:GameDataStore:method:setDataMap"
title: "GameDataStore.setDataMap() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "setDataMap"]
---

# `GameDataStore.setDataMap(key: string, value: any): void`

<!-- convention-summary-start -->
### GameDataStore.setDataMap() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.setDataMap() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
setDataMap(key: string, value: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
Stores key-value in internal lookup Map: `this._dataMap.set(key, value)`.

---

## 3. Un-truncated Source Code Implementation
```typescript
setDataMap(key: string, value: any): void {
    this._dataMap.set(key, value);
}
```
