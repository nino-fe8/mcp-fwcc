---
id: "cc_slot_module:InfoPanel:methods:onDestroy"
title: "InfoPanel.onDestroy Method"
category: "cc_slot_module"
tags: ["InfoPanel", "infopanel", "cc_slot_module", "methods", "onDestroy"]
---

# 📖 `InfoPanel.onDestroy()`

<!-- convention-summary-start -->
### InfoPanel.onDestroy Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfoPanel.onDestroy Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onDestroy(): void
```

---

## 2. Complete Source Code Implementation

```typescript
protected onDestroy(): void {
	this.observer.releaseAll(this.uiManagerData, this);
}
```
