---
id: "cc_slot_mechanics:TumblingReelModule:methods:changeToBlurSymbol"
title: "TumblingReelModule.changeToBlurSymbol Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "changeToBlurSymbol"]
---

# 📖 `TumblingReelModule.changeToBlurSymbol()`

<!-- convention-summary-start -->
### TumblingReelModule.changeToBlurSymbol Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.changeToBlurSymbol Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
changeToBlurSymbol(symbol: cc.Node): void
```

- **Primary Role**: Implements changeToBlurSymbol within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected changeToBlurSymbol(symbol: cc.Node): void {
        SlotSymbolModule.getModuleComponent(symbol).changeToBlurSymbol();
    }
```
