---
id: "cc_slot_mechanics:InfinityReelModule:methods:help"
title: "InfinityReelModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["InfinityReelModule", "infinity_reel_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `InfinityReelModule.help()`

<!-- convention-summary-start -->
### InfinityReelModule.help Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for InfinityReelModule.help Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
help(HelpDocuments.INFINITY_REEL_MODULE) export class InfinityReelModule extends SlotReelModule { protected initSymbol(reelIndex: number): 
```

- **Scope**: `InfinityReelModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.INFINITY_REEL_MODULE)
export class InfinityReelModule extends SlotReelModule {

	protected initSymbol(reelIndex: number): { visibleSymbol: number, totalSymbol: number } {
		const index: number = (reelIndex >= this.DEFAULT_FORMAT.length) ? 0 : reelIndex;
		const visibleSymbol = this.DEFAULT_FORMAT[index];
		const totalSymbol = visibleSymbol + this.config.BUFFER_TOP + this.config.BUFFER_BOT;

		return { visibleSymbol, totalSymbol };
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
