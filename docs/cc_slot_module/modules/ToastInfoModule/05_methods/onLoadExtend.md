---
id: "cc_slot_module:ToastInfoModule:methods:onLoadExtend"
title: "ToastInfoModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["ToastInfoModule", "toast_info_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `ToastInfoModule.onLoadExtend()`

<!-- convention-summary-start -->
### ToastInfoModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ToastInfoModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Registers listener for `NETWORK_WARNING` on `GameLogic` and sets initial node visibility to false.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.gameLogic.on("NETWORK_WARNING", this.showMessage, this);
    this.node.active = false;
}
```
