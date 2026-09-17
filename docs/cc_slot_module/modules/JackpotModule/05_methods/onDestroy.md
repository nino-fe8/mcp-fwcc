---
id: "cc_slot_module:JackpotModule:methods:onDestroy"
title: "JackpotModule.onDestroy Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `JackpotModule.onDestroy()`

<!-- convention-summary-start -->
### JackpotModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Releases reactive observers registered against `uiManagerData` and `jackpotData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.uiManagerData, this);
    this.observer.releaseAll(this.jackpotData, this);
}
```
