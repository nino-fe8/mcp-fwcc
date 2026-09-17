---
id: "cc_slot_module:TurboButton:methods:loadCacheTurbo"
title: "TurboButton.loadCacheTurbo Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "loadCacheTurbo"]
---

# 📖 `TurboButton.loadCacheTurbo()`

<!-- convention-summary-start -->
### TurboButton.loadCacheTurbo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.loadCacheTurbo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes active turbo state from data model into `SlotGameSettings` and updates visual display.

```typescript
public loadCacheTurbo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
loadCacheTurbo(): void {
    const active = this.turboModel.active;
    this.gameSettings.isTurboActive = active;
    this.display.emit("ON_TURBO_ACTIVE", active);
}
```
