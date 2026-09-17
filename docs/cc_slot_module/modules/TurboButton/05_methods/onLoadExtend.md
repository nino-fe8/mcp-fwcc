---
id: "cc_slot_module:TurboButton:methods:onLoadExtend"
title: "TurboButton.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TurboButton.onLoadExtend()`

<!-- convention-summary-start -->
### TurboButton.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes `TurboButtonData` model, event listeners, observers, and input bindings.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.TURBO.LOAD_CACHE_TURBO, this.loadCacheTurbo, this);
    this.turboModel = this.gameLogic.getDataModel().TurboButtonData;
    this.setupObserver();
    this.listenEvents();
}
```
