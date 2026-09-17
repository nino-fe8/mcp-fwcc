---
id: "cc_slot_module:BetSelectionPanel:methods:getBetId"
title: "BetSelectionPanel.getBetId Method"
category: "cc_slot_module"
tags: ["BetSelectionPanel", "betselectionpanel", "cc_slot_module", "methods", "getBetId", "ante_bet"]
---

# 📖 `BetSelectionPanel.getBetId()`

<!-- convention-summary-start -->
### BetSelectionPanel.getBetId Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetSelectionPanel.getBetId Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Constructs and returns the full composite bet identifier string by appending any active extra/ante bet suffix to the main bet key.

```typescript
public getBetId(): string
```

---

## 2. Format Specification

$$\text{FullBetId} = \text{currentBetId} + \text{betModel.extraBetKey}$$

For example:
- Main bet tier `"3"` without extra bet: returns `"3"`.
- Main bet tier `"3"` with active Extra Bet `"X"`: returns `"3X"`.

---

## 3. Complete Source Code Implementation

```typescript
getBetId(): string {
	return `${this.currentBetId}${this.betModel.extraBetKey}`;
}
```
