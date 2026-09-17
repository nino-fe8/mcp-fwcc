---
id: "cc_slot_module:BaseUIPopup:methods:playSfxClick"
title: "BaseUIPopup.playSfxClick Method"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "methods", "playSfxClick"]
---

# 📖 `BaseUIPopup.playSfxClick()`

<!-- convention-summary-start -->
### BaseUIPopup.playSfxClick Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for BaseUIPopup.playSfxClick Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

Triggers click sound via `soundPlayer.playSFXClick()` if the popup is open.

```typescript
public playSfxClick(): void
```

---

## 2. Complete Source Code Implementation

```typescript
playSfxClick(): void {
    if (this.isClose) {
        return;
    }
    this.soundPlayer && this.soundPlayer.playSFXClick();
}
```
