---
id: "cc_slot_module:GameEventManager:method:destroy"
title: "GameEventManager.destroy() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "destroy", "cleanup"]
---

# `GameEventManager.destroy(): void`

<!-- convention-summary-start -->
### GameEventManager.destroy() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager.destroy() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public destroy(): void
```

---

## 2. Detailed Algorithmic Execution Logic
Clears all entries by resetting `this.events = {}`.

---

## 3. Un-truncated Source Code Implementation
```typescript
destroy(): void {
    this.events = {};
}
```
