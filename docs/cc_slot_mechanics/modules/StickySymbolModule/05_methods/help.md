---
id: "cc_slot_mechanics:StickySymbolModule:methods:help"
title: "StickySymbolModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["StickySymbolModule", "sticky_symbol_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `StickySymbolModule.help()`

<!-- convention-summary-start -->
### StickySymbolModule.help Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for StickySymbolModule.help Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
help(HelpDocuments.STICKY_SYMBOL_MODULE) export class StickySymbolModule extends SlotBaseModule { @property(cc.Node) stickyLayer: cc.Node = null; @property(SlotSymbolManager) stickyPool: SlotSymbolManager = null; protected config: StickySymbolConfig = null; protected data: StickySymbolData; protected stickySymbols: Map<number, cc.Node> = new Map(); onLoadExtend(): void
```

- **Scope**: `StickySymbolModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.STICKY_SYMBOL_MODULE)
export class StickySymbolModule extends SlotBaseModule {
	@property(cc.Node) stickyLayer: cc.Node = null;
	@property(SlotSymbolManager) stickyPool: SlotSymbolManager = null;

	protected config: StickySymbolConfig = null;
	protected data: StickySymbolData;
	protected stickySymbols: Map<number, cc.Node> = new Map();

	onLoadExtend(): void {
		this.config = this.getComponent(StickySymbolConfig);
		this.data = this.getComponent(StickySymbolData);
		this.registerGameEvents();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
