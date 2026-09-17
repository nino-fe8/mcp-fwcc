---
id: "cc_slot_module:TurboButton:methods:onDestroy"
title: "TurboButton.onDestroy Method"
category: "cc_slot_module"
tags: ["TurboButton", "turbo_button", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `TurboButton.onDestroy()`

<!-- convention-summary-start -->
### TurboButton.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboButton.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Releases reactive observers registered against `turboModel`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.turboModel, this);
}
```
