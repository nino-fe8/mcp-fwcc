---
id: "cc_slot_module:GameModeDirectorModule:method:onStateUpdate"
title: "GameModeDirectorModule.onStateUpdate() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "onStateUpdate", "GameDataStore", "updateDataModules"]
---

# `GameModeDirectorModule.onStateUpdate(data: any): void`

<!-- convention-summary-start -->
### GameModeDirectorModule.onStateUpdate() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule.onStateUpdate() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onStateUpdate(data: any): void
```

---

## 2. Detailed Algorithmic Execution Logic
1. Ingests raw server payload: `this.dataStore.parseDataPS(data)`.
2. Triggers reactive broadcast: `this.dataStore.updateDataModules()`.

---

## 3. Un-truncated Source Code Implementation
```typescript
onStateUpdate(data): void {
    this.dataStore.parseDataPS(data);
    this.dataStore.updateDataModules();
}
```
