---
id: "cc_slot_module:ToastInfoModule:methods:onDestroy"
title: "ToastInfoModule.onDestroy Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `ToastInfoModule.onDestroy()`

<!-- convention-summary-start -->
### ToastInfoModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Stops running toast tween animations upon node destruction.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this._tweenToast && this._tweenToast.stop();
    this._tweenToast = null;
}
```
