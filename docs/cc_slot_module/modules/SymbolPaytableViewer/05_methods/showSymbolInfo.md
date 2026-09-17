---
id: "cc_slot_module:SymbolPaytableViewer:methods:showSymbolInfo"
title: "SymbolPaytableViewer.showSymbolInfo Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "showSymbolInfo"]
---

# 📖 `SymbolPaytableViewer.showSymbolInfo()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.showSymbolInfo Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.showSymbolInfo Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public showSymbolInfo(symbolData: any): void
```

---

## 2. Complete Source Code Implementation

```typescript
showSymbolInfo(symbolData: any): void {
	this.bgNode && (this.bgNode.active = true);
	this.topBlock && (this.topBlock.active = true);
	this.symbolPayoutViewer.node.active = true;
	this.symbolPayoutViewer.showSymbolInfo(symbolData);
}
```
