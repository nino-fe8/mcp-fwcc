---
id: "cc_slot_module:TotalWinModule:methods:startParticle"
title: "TotalWinModule.startParticle Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "startParticle"]
---

# 📖 `TotalWinModule.startParticle()`

<!-- convention-summary-start -->
### TotalWinModule.startParticle Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.startParticle Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Resets and triggers continuous gold coin particle shower emissions.

```typescript
public startParticle(): void
```

---

## 2. Complete Source Code Implementation

```typescript
startParticle(): void {
    this._coinParticle && this._coinParticle.resetSystem();
}
```
