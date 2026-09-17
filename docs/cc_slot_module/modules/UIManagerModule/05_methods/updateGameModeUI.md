---
id: "cc_slot_module:UIManagerModule:methods:updateGameModeUI"
title: "UIManagerModule.updateGameModeUI Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "updateGameModeUI"]
---

# 📖 `UIManagerModule.updateGameModeUI()`

<!-- convention-summary-start -->
### UIManagerModule.updateGameModeUI Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.updateGameModeUI Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Synchronously hides all UI elements and displays the appropriate HUD controls for the requested game mode.

```typescript
public updateGameModeUI(gameMode: number): void
```

---

## 2. Complete Source Code Implementation

```typescript
updateGameModeUI(gameMode: number): void {
    this.hideAllUI();
    this.showUIForGameMode(gameMode);
}
```
