---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:enablePreviousRespinBtn"
title: "BetHistoryDetailPortrait.enablePreviousRespinBtn Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "enablePreviousRespinBtn"]
---

# 📖 `BetHistoryDetailPortrait.enablePreviousRespinBtn()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.enablePreviousRespinBtn Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.enablePreviousRespinBtn Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public enablePreviousRespinBtn(isEnablePrevRespin: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
enablePreviousRespinBtn(isEnablePrevRespin: boolean): void {
	this.prevRespinBtn.interactable = isEnablePrevRespin;
}
```
