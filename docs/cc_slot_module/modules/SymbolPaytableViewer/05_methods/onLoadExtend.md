---
id: "cc_slot_module:SymbolPaytableViewer:methods:onLoadExtend"
title: "SymbolPaytableViewer.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SymbolPaytableViewer", "symbolpaytableviewer", "cc_slot_module", "methods", "onLoadExtend"]
---

# 📖 `SymbolPaytableViewer.onLoadExtend()`

<!-- convention-summary-start -->
### SymbolPaytableViewer.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SymbolPaytableViewer.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Overview & Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Complete Source Code Implementation

```typescript
onLoadExtend(): void {
	this.node.on("START_SPIN", this.hideSymbolInfo, this);
	this._config = this.getComponent(TableModuleConfig);
	this._table = this.getComponent(SlotTableModule);
	this._slotTableData = this.getComponent(SlotTableData);
	this.touchHolder.on(Node.EventType.TOUCH_END, this.handleTouchSymbol, this);
	this.symbolPayoutViewer.node.active = false;
}
```
