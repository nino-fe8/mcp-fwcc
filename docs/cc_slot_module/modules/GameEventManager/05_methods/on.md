---
id: "cc_slot_module:GameEventManager:method:on"
title: "GameEventManager.on() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "on", "subscribe", "events"]
---

# `GameEventManager.on(event: string, listener: Function, context: any = null): void`

<!-- convention-summary-start -->
### GameEventManager.on() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager.on() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public on(event: string, listener: Function, context: any = null): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `SlotBaseModule.registerEvents()` during module initialization.

---

## 3. Detailed Algorithmic Execution Logic
1. Checks if `this.events[event]` exists; if not, initializes `this.events[event] = []`.
2. Pushes `{ listener, context }` into the subscriber array.

---

## 4. Un-truncated Source Code Implementation
```typescript
on(event: string, listener: Function, context: any = null): void {
    if (!this.events[event]) {
        this.events[event] = [];
    }
    this.events[event].push({ listener, context });
}
```
