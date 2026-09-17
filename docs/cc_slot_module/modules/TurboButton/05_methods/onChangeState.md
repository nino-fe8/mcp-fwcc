---
id: "cc_slot_module:TurboButton:methods:onChangeState"
title: "TurboButton.onChangeState Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onChangeState"]
---

# 📖 `TurboButton.onChangeState()`

<!-- convention-summary-start -->
### TurboButton.onChangeState Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onChangeState Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Dispatches `TURBO_BUTTON_STATE_CHANGE` to the `display` node.

```typescript
public onChangeState(state: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
onChangeState(state): void {
    this.display.emit("TURBO_BUTTON_STATE_CHANGE", state);
}
```
