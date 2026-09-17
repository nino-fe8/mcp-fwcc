---
id: "cc_slot_module:TotalWinModule:methods:stopParticle"
title: "TotalWinModule.stopParticle Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "stopParticle"]
---

# 📖 `TotalWinModule.stopParticle()`

<!-- convention-summary-start -->
### TotalWinModule.stopParticle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.stopParticle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Halts active coin particle shower emissions.

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
