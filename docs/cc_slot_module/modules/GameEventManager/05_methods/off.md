---
id: "cc_slot_module:GameEventManager:method:off"
title: "GameEventManager.off() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "off", "unsubscribe", "events"]
---

# `GameEventManager.off(event: string, listener: Function, context: any = null): void`

<!-- convention-summary-start -->
### GameEventManager.off() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager.off() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public off(event: string, listener: Function, context: any = null): void
```

---

## 2. Detailed Algorithmic Execution Logic
Filters `this.events[event]` to remove entries matching both the exact `listener` function reference and `context`.

---

## 3. Un-truncated Source Code Implementation
```typescript
off(event: string, listener: Function, context: any = null): void {
    if (!this.events[event]) {
        return;
    }
    this.events[event] = this.events[event].filter(entry => (entry.listener !== listener) || (entry.context !== context));
}
```
