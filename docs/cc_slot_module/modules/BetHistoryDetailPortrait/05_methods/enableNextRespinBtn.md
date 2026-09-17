---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:enableNextRespinBtn"
title: "BetHistoryDetailPortrait.enableNextRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "enableNextRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.enableNextRespinBtn()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.enableNextRespinBtn Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.enableNextRespinBtn Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public enableNextRespinBtn(isEnableNextRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enableNextRespinBtn(isEnableNextRespin: boolean): void {
	this.nextRespinBtn.interactable = isEnableNextRespin;
}
```
