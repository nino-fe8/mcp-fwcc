---
id: "cc_slot_module:GameEventManager:method:setLogger"
title: "GameEventManager.setLogger() Method Specification"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "method", "setLogger", "logging", "debugging"]
---

# `GameEventManager.setLogger(logger: any, logTag: string): void`

<!-- convention-summary-start -->
### GameEventManager.setLogger() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameEventManager.setLogger() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
public setLogger(logger: any, logTag: string): void
```

---

## 2. When Is It Called & Trigger Source
* **Invoking Entity**: `GameInit.setupEventManager()` or `GameModeDirectorModule.setupModules()`.
* **Lifecycle Moment**: Frame 0 during bootstrap.

---

## 3. Detailed Algorithmic Execution Logic
1. Stores the custom logger reference: `this._logger = logger`.
2. Sets the prefix tag: `this._logTag = logTag` (e.g. `'[EventManager]'`).
3. Calls `this._logger.addFilter(logTag)` to register the tag with the global debugging filter system.

---

## 4. Un-truncated Source Code Implementation
```typescript
setLogger(logger: any, logTag: string): void {
    if (logger) {
        this._logger = logger;
        this._logTag = logTag;
        this._logger.addFilter(logTag);
    }
}
```
