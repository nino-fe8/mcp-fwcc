---
id: "cc_slot_module:UIManagerModule:methods:checkDisplayPopup"
title: "UIManagerModule.checkDisplayPopup Method"
category: "cc_slot_module"
tags: ["UIManagerModule", "ui_manager_module", "cc_slot_module", "methods", "checkDisplayPopup", "input_guard"]
---

# 📖 `UIManagerModule.checkDisplayPopup()`

<!-- convention-summary-start -->
### UIManagerModule.checkDisplayPopup Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for UIManagerModule.checkDisplayPopup Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Determines whether any popup or cutscene is actively blocking player input, and caches the result into `uiManagerData`.

```typescript
public checkDisplayPopup(): boolean
```

---

## 2. Complete Source Code Implementation

```typescript
checkDisplayPopup(): boolean {
    const isDisplay = this.popupControl.isDisplayPopup() || this.cutsceneControl.isDisplayCutscene() || !this.isSpinVisible();
    this.uiManagerData.setDisplayPopup(isDisplay);
    return isDisplay;
}
```
