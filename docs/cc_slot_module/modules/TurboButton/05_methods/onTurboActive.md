---
id: "cc_slot_module:TurboButton:methods:onTurboActive"
title: "TurboButton.onTurboActive Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onTurboActive"]
---

# 📖 `TurboButton.onTurboActive()`

<!-- convention-summary-start -->
### TurboButton.onTurboActive Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onTurboActive Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronizes `SlotGameSettings.isTurboActive` and emits `ON_TURBO_ACTIVE` to the `display` node.

```typescript
public onTurboActive(active: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onTurboActive(active: boolean): void {
    this.gameSettings.isTurboActive = active;
    this.display.emit("ON_TURBO_ACTIVE", active);
}
```
