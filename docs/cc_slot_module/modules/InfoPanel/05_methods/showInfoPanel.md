---
id: "cc_slot_module:InfoPanel:methods:showInfoPanel"
title: "InfoPanel.showInfoPanel Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "showInfoPanel"]
---

# 📖 `InfoPanel.showInfoPanel()`

<!-- convention-summary-start -->
### InfoPanel.showInfoPanel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.showInfoPanel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showInfoPanel(isActive: boolean): void
```

---

## 2. Complete Source Code Implementation

```typescript
showInfoPanel(isActive: boolean): void {
	this.togglePopup(isActive);
}
```
