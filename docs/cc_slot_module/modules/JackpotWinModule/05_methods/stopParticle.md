---
id: "cc_slot_module:JackpotWinModule:methods:stopParticle"
title: "JackpotWinModule.stopParticle Method"
category: "cc_slot_module"
tags: ["JackpotWinModule", "jackpot_win_module", "cc_slot_module", "methods", "stopParticle"]
---

# 📖 `JackpotWinModule.stopParticle()`

<!-- convention-summary-start -->
### JackpotWinModule.stopParticle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for JackpotWinModule.stopParticle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Halts active coin particle emission.

```typescript
public stopParticle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
stopParticle(): void {
    this._coinParticle && this._coinParticle.stopSystem();
}
```
