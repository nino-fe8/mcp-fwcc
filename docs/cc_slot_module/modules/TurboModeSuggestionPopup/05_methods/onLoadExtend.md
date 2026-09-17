---
id: "cc_slot_module:TurboModeSuggestionPopup:methods:onLoadExtend"
title: "TurboModeSuggestionPopup.onLoadExtend Method"
category: "cc_slot_module"
tags: ["TurboModeSuggestionPopup", "turbomodesuggestionpopup", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `TurboModeSuggestionPopup.onLoadExtend()`

<!-- convention-summary-start -->
### TurboModeSuggestionPopup.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TurboModeSuggestionPopup.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
	this.gameLogic.emit(GameLogicUIEvents.CHECK_TURBO_MODE_SUGGESTION_POPUP);
	this.setupObserver();
	this.node.active = false;
}
```
