---
id: "cc_slot_module:UIManagerModule:methods:onLoadExtend"
title: "UIManagerModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `UIManagerModule.onLoadExtend()`

<!-- convention-summary-start -->
### UIManagerModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Binds `UPDATE_GAME_MODE_UI` event listener, acquires data models, and initializes state observers.

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
    this.eventManager.on(GameUIEvents.UI_MANAGER.UPDATE_GAME_MODE_UI, this.updateGameModeUI, this);
    this.uiManagerData = this.gameLogic.getDataModel().UIManagerData;
    this.promotionDataModel = this.gameLogic.getDataModel().PromotionData;
    this.setupObserver();
}
```
