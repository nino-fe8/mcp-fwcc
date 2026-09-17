---
id: "cc_slot_module:PayTablePanel:methods:closePanel"
title: "PayTablePanel.closePanel Method"
category: "cc_slot_module"
tags: ["PayTablePanel", "paytablepanel", "cc_slot_module", "methods", "closePanel"]
---

# 📖 `PayTablePanel.closePanel()`

<!-- convention-summary-start -->
### PayTablePanel.closePanel Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for PayTablePanel.closePanel Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public closePanel(): void
```

---

## 2. Complete Source Code Implementation

```typescript
closePanel(): void {
	this.node.active = false;
}
```
