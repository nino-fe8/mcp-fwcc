---
id: "cc_slot_module:GameInit:events:global_event_bus"
title: "GameInit Global Event Bus Interactions"
category: "cc_slot_module"
tags: ["GameInit", "gameinit", "cc_slot_module", "events", "global_events", "eventManager", "GameEventManager"]
---

# 🌐 GameInit Global Event Bus Interactions

<!-- convention-summary-start -->
### GameInit Global Event Bus Interactions Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameInit Global Event Bus Interactions.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 06_events
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Global Event Bus Setup

`GameInit` creates the master `GameEventManager` singleton during `onLoad()`:

```typescript
setupEventManager(): void {
    this._eventManager = new GameEventManager();
    this._eventManager.setLogger(this._logger, '[EventManager]');
}
```

---

## 2. Event Registry Lifecycle

* **Instantiation**: Created in `setupEventManager()` on Frame 0.
* **Service Provision**: Registered into the IoC Container via `provide(GameEventManager, this._eventManager, gameId)`.
* **Teardown**: Destroyed on `GameInit.onDestroy()` with `this._eventManager.destroy()`.
