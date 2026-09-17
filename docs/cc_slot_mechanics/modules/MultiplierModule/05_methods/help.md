---
id: "cc_slot_mechanics:MultiplierModule:methods:help"
title: "MultiplierModule.help Method Implementation"
category: "cc_slot_mechanics"
tags: ["MultiplierModule", "multiplier_module", "cc_slot_mechanics", "methods", "help"]
---

# 📖 `MultiplierModule.help()`

<!-- convention-summary-start -->
### MultiplierModule.help Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MultiplierModule.help Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
help(HelpDocuments.MULTIPLIER_MODULE) export class MultiplierModule extends SlotBaseModule { @property(cc.Label) lbMultiplier: cc.Label = null; @property prefix: string = "x"; @property defaultMultiplier: number = 1; _multiplierData: MultiplierData; onLoadExtend(): void
```

- **Scope**: `MultiplierModule`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
help(HelpDocuments.MULTIPLIER_MODULE)
export class MultiplierModule extends SlotBaseModule {
	@property(cc.Label) lbMultiplier: cc.Label = null;
	@property
	prefix: string = "x";
	@property
	defaultMultiplier: number = 1;

	_multiplierData: MultiplierData;

	onLoadExtend(): void {
		this._multiplierData = this.getComponent(MultiplierData);
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
