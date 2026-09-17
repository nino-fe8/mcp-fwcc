---
id: "cc_slot_module:GameDirector:method:onUIEventRequest"
title: "GameDirector.onUIEventRequest() Method Specification"
category: "cc_slot_module"
tags: ["GameDirector", "game_director", "cc_slot_module", "method", "onUIEventRequest", "GameLogicEventHandler"]
---

# `GameDirector.onUIEventRequest(event: string, data: any): void | Promise<void>`

<!-- convention-summary-start -->
### GameDirector.onUIEventRequest() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameDirector.onUIEventRequest() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public onUIEventRequest(event: string, data: any): void | Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
1. Retrieves active game mode from `this.getCurrentMode()`.
2. Resolves the `GameLogicEventHandler` component attached to `rootNode`.
3. Calls `invoker.onLogicEventRequest(event, data)` and returns the resulting Promise.

---

## 3. Un-truncated Source Code Implementation
```typescript
onUIEventRequest(event, data): void | Promise<void> {
    let invoker = this.getCurrentMode() && this.getCurrentMode().rootNode.getComponent(GameLogicEventHandler);
    return invoker && invoker.onLogicEventRequest(event, data);
}
```
