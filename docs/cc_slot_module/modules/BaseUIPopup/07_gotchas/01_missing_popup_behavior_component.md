---
id: "cc_slot_module:BaseUIPopup:gotchas:missing_popup_behavior_component"
title: "Gotcha: Subclass Overriding onLoadExtend Without Super Call"
category: "cc_slot_module"
tags: ["BaseUIPopup", "base_ui_popup", "cc_slot_module", "gotchas", "super_call"]
---

# ⚠️ Gotcha: Subclass Overriding onLoadExtend Without Super Call

<!-- convention-summary-start -->
### Gotcha: Subclass Overriding onLoadExtend Without Super Call Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Subclass Overriding onLoadExtend Without Super Call.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Problem Description

`BaseUIPopup.onLoadExtend()` instantiates or caches `this.popupBehavior`. If a subclass overrides `onLoadExtend()` without invoking `super.onLoadExtend()`, `this.popupBehavior` is left `null`, causing:
`TypeError: Cannot read property 'showPopup' of null` inside `togglePopup()`.

---

## 2. Prevention

Always call `super.onLoadExtend()` in all popup subclasses:
```typescript
onLoadExtend(): void {
    this.init();
    this.setupObserver();
    super.onLoadExtend();
}
```
