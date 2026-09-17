---
id: "cc_slot_module:GameDataStore:method:mapNewKeys"
title: "GameDataStore.mapNewKeys() Method Specification"
category: "cc_slot_module"
tags: ["GameDataStore", "game_data_store", "cc_slot_module", "method", "mapNewKeys", "key_remapping"]
---

# `GameDataStore.mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any>`

<!-- convention-summary-start -->
### GameDataStore.mapNewKeys() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDataStore.mapNewKeys() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any>
```

---

## 2. Detailed Algorithmic Execution Logic
Iterates through each key in `playSession`. If a translation mapping exists in `mapKeys[key]`, re-assigns `playSession[newKey] = playSession[key]` and removes the old key via `delete playSession[key]`. Returns the modified `playSession` object.

---

## 3. Un-truncated Source Code Implementation
```typescript
mapNewKeys(playSession: Record<string, any>, mapKeys: Record<string, string>): Record<string, any> {
    Object.keys(playSession).forEach(key => {
        if (mapKeys[key]) {
            const newKey = mapKeys[key];
            playSession[newKey] = playSession[key];
            delete playSession[key];
        }
    });

    return playSession;
}
```
