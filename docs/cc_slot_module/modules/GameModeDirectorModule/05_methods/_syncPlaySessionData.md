---
id: "cc_slot_module:GameModeDirectorModule:method:syncPlaySessionData"
title: "GameModeDirectorModule._syncPlaySessionData() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_syncPlaySessionData"]
---

# `GameModeDirectorModule._syncPlaySessionData(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._syncPlaySessionData() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._syncPlaySessionData() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_syncPlaySessionData(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Executes the script queue for `"SyncPlaySessionData"`.

---

## 3. Un-truncated Source Code Implementation
```typescript
_syncPlaySessionData(): Promise<void> {
    return this.runAction("SyncPlaySessionData");
}
```
