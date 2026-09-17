---
id: "cc_slot_module:GameDataStore:method:hasPlaySession"
title: "GameDataStore.hasPlaySession() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "hasPlaySession"]
---

# `GameDataStore.hasPlaySession(): boolean`

<!-- convention-summary-start -->
### GameDataStore.hasPlaySession() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.hasPlaySession() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
hasPlaySession(): boolean
```

---

## 2. Detailed Algorithmic Execution Logic
Checks `Object.keys(this.playSession).length > 0`. Returns `true` if active session payload exists.

---

## 3. Un-truncated Source Code Implementation
```typescript
hasPlaySession(): boolean {
    return Object.keys(this.playSession).length > 0;
}
```
