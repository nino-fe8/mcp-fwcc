---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:activeNextRespinBtn"
title: "BetHistoryDetailPortrait.activeNextRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "activeNextRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.activeNextRespinBtn()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.activeNextRespinBtn Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.activeNextRespinBtn Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public activeNextRespinBtn(isActiveNextRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
activeNextRespinBtn(isActiveNextRespin: boolean): void {
	this.nextRespinBtn.node.active = isActiveNextRespin;
}
```
