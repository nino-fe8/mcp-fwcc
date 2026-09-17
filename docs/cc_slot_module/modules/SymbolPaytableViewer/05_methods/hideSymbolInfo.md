---
id: "cc_slot_module:SymbolPaytableViewer:methods:hideSymbolInfo"
title: "SymbolPaytableViewer.hideSymbolInfo Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "hideSymbolInfo"]
---

# 📖 `SymbolPaytableViewer.hideSymbolInfo()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.hideSymbolInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.hideSymbolInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public hideSymbolInfo(): void
```

---

## 2. Complete Source Code Implementation

```typescript
hideSymbolInfo(): void {
	this.bgNode && (this.bgNode.active = false);
	this.topBlock && (this.topBlock.active = false);
	this.symbolPayoutViewer.node.active = false;
	this.symbolPayoutViewer.hideSymbolInfo();
}
```
