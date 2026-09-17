---
id: "cc_slot_module:AutoSpinPanel:methods:setDefaultSelectedIndex"
title: "AutoSpinPanel.setDefaultSelectedIndex Method"
category: "cc_slot_module"
tags: ["AutoSpinPanel", "autospinpanel", "cc_slot_module", "methods", "setDefaultSelectedIndex"]
---

# 📖 `AutoSpinPanel.setDefaultSelectedIndex()`

<!-- convention-summary-start -->
### AutoSpinPanel.setDefaultSelectedIndex Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for AutoSpinPanel.setDefaultSelectedIndex Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public setDefaultSelectedIndex(): void
```

---

## 2. Complete Source Code Implementation

```typescript
setDefaultSelectedIndex(): void {
	this.currentSelectedIndex = this.config.AUTO_SPIN_NUMBERS.length - 1;
	this.onSelectAutoSpin(this.currentSelectedIndex);
	this.initialized = true;
}
```
