---
id: "cc_slot_mechanics:HorizontalReelModule:methods:help"
title: "HorizontalReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["HorizontalReelModule", "horizontal_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `HorizontalReelModule.help()`

<!-- convention-summary-start -->
### HorizontalReelModule.help Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for HorizontalReelModule.help Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
help(HelpDocuments.HORIZONTAL_REEL_MODULE) export class HorizontalReelModule extends SlotReelModule { protected isRealSymbol(index: number): boolean
```

- **Scope**: `HorizontalReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.HORIZONTAL_REEL_MODULE)
export class HorizontalReelModule extends SlotReelModule {
	protected isRealSymbol(index: number): boolean {
		return index >= this.config.BUFFER_LEFT && index < this.reelManager.totalSymbol - this.config.BUFFER_RIGHT;
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
