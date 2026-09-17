---
id: "cc_slot_module:JackpotModule:methods:updateJackpotData"
title: "JackpotModule.updateJackpotData Method"
category: "cc_slot_module"
tags: ["JackpotModule", "jackpot_module", "cc_slot_module", "methods", "updateJackpotData"]
---

# 📖 `JackpotModule.updateJackpotData()`

<!-- convention-summary-start -->
### JackpotModule.updateJackpotData Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotModule.updateJackpotData Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Renders jackpot pools for the active bet index when the `jackpots` object changes.

```typescript
public updateJackpotData(jackpots: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateJackpotData(jackpots: any): void {
    this.renderAllJackpot(jackpots[this.jackpotData.index]);
}
```
