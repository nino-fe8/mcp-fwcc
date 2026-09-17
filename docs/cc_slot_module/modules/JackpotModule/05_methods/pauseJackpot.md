---
id: "cc_slot_module:JackpotModule:methods:pauseJackpot"
title: "JackpotModule.pauseJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "pauseJackpot"]
---

# 📖 `JackpotModule.pauseJackpot()`

<!-- convention-summary-start -->
### JackpotModule.pauseJackpot Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.pauseJackpot Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Sets `pauseUpdateJackpot = true` on `JackpotData` to freeze pool counting during celebrations.

```typescript
public pauseJackpot(): void
```

---

## 2. Complete Source Code Implementation

```typescript
pauseJackpot(): void {
    this.jackpotData.setPauseJackpot(true);
}
```
