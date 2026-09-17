---
id: "cc_slot_module:ExtraBetModule:methods:onDestroy"
title: "ExtraBetModule.onDestroy Method"
category: "cc_slot_module"
tags: ["ExtraBetModule", "extra_bet_module", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `ExtraBetModule.onDestroy()`

<!-- convention-summary-start -->
### ExtraBetModule.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for ExtraBetModule.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Releases reactive observers subscribed to `eno.BetData`.

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onDestroy(): void {
    this.observer.releaseAll(this.betModel, this);
}
```
