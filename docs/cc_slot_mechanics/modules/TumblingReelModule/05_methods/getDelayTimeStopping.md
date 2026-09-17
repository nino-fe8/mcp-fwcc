---
id: "cc_slot_mechanics:TumblingReelModule:methods:getDelayTimeStopping"
title: "TumblingReelModule.getDelayTimeStopping Method"
category: "cc_slot_mechanics"
tags: ["TumblingReelModule", "tumbling_reel_module", "cc_slot_mechanics", "methods", "getDelayTimeStopping"]
---

# 📖 `TumblingReelModule.getDelayTimeStopping()`

<!-- convention-summary-start -->
### TumblingReelModule.getDelayTimeStopping Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TumblingReelModule.getDelayTimeStopping Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature & Overview

```typescript
getDelayTimeStopping(index: number): number
```

- **Primary Role**: Implements getDelayTimeStopping within the TumblingReelModule mechanics lifecycle.

---

## 2. Complete Source Code Implementation

```typescript
protected getDelayTimeStopping(index: number): number {
        return index * this.config.DELAY_BETWEEN_SYMBOLS_STOPPING + this.reelIndex * this.config.DELAY_BETWEEN_REELS;
    }
```
