---
id: "cc_slot_module:JackpotModule:methods:resumeJackpot"
title: "JackpotModule.resumeJackpot Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "resumeJackpot"]
---

# 📖 `JackpotModule.resumeJackpot()`

<!-- convention-summary-start -->
### JackpotModule.resumeJackpot Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.resumeJackpot Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Sets `pauseUpdateJackpot = false` on `JackpotData` and re-renders pools with progressive or instant time.

```typescript
public resumeJackpot(isForce: boolean = false): void
```

---

## 2. Complete Source Code Implementation

```typescript
resumeJackpot(isForce: boolean = false): void {
    this.jackpotData.setPauseJackpot(false);
    this.renderAllJackpot(this.currentData[this.jackpotData.index], isForce ? 0 : JACKPOT_PROGRESSIVE_TIME.PROGRESS);
}
```
