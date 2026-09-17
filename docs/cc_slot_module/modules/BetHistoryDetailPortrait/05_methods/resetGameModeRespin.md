---
id: "cc_slot_module:BetHistoryDetailPortrait:methods:resetGameModeRespin"
title: "BetHistoryDetailPortrait.resetGameModeRespin Method"
category: "cc_slot_module"
tags: ["BetHistoryDetailPortrait", "bethistorydetailportrait", "cc_slot_module", "methods", "resetGameModeRespin"]
---

# 📖 `BetHistoryDetailPortrait.resetGameModeRespin()`

<!-- convention-summary-start -->
### BetHistoryDetailPortrait.resetGameModeRespin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BetHistoryDetailPortrait.resetGameModeRespin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public resetGameModeRespin(): void
```

---

## 2. Complete Source Code Implementation

```typescript
resetGameModeRespin(): void {
	this.gameModeView.emit("RESET_GAME_MODE_VIEW");
	this.infoLabel.string = "";
}
```
