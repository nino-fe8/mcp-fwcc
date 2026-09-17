---
id: "cc_slot_mechanics:MegaReelModule:methods:checkSymbolHidden"
title: "MegaReelModule.checkSymbolHidden Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelModule", "mega_reel_module", "cc_slot_mechanics", "methods", "checkSymbolHidden"]
---

# 📖 `MegaReelModule.checkSymbolHidden()`

<!-- convention-summary-start -->
### MegaReelModule.checkSymbolHidden Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelModule.checkSymbolHidden Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
checkSymbolHidden(symbol:cc.Node): boolean
```

- **Scope**: `MegaReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
protected checkSymbolHidden(symbol:cc.Node):boolean {
        const indexSymbol = SlotSymbolModule.getModuleComponent(symbol).getIndex();
        return (indexSymbol >= 0);
    }

    protected recycleSymbol(): void {
		if (!this.listSymbols.length) {
			return;
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
