---
id: "cc_slot_module:AutoSpinPanel:methods:onAutoSpinPanelOpen"
title: "AutoSpinPanel.onAutoSpinPanelOpen Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "onAutoSpinPanelOpen"]
---

# 📖 `AutoSpinPanel.onAutoSpinPanelOpen()`

<!-- convention-summary-start -->
### AutoSpinPanel.onAutoSpinPanelOpen Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel.onAutoSpinPanelOpen Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onAutoSpinPanelOpen(isOpen: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
onAutoSpinPanelOpen(isOpen: boolean): void {
	this.togglePopup(isOpen);
}
```
