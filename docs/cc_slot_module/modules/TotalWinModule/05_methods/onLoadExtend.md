---
id: "cc_slot_module:TotalWinModule:methods:onLoadExtend"
title: "TotalWinModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TotalWinModule", "total_win_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TotalWinModule.onLoadExtend()`

<!-- convention-summary-start -->
### TotalWinModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TotalWinModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Initializes internal component references for the total win label and coin particle system.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this._lbWinAmount = this.winAmount && this.winAmount.getComponent(Label);
    this._coinParticle = this.coinsEffect && this.coinsEffect.getComponent(ParticleSystem);
}
```
