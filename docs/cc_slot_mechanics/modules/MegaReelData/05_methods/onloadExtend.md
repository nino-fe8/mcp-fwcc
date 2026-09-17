---
id: "cc_slot_mechanics:MegaReelData:methods:onloadExtend"
title: "MegaReelData.onloadExtend Method Implementation"
category: "cc_slot_mechanics"
tags: ["MegaReelData", "mega_reel_data", "cc_slot_mechanics", "methods", "onloadExtend"]
---

# 📖 `MegaReelData.onloadExtend()`

<!-- convention-summary-start -->
### MegaReelData.onloadExtend Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for MegaReelData.onloadExtend Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
onloadExtend(): void
```

- **Scope**: `MegaReelData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
onloadExtend(): void {
		this.registeredKeys = [...this.registeredKeys, "fBi", "hBi"];
        this._megaReelConfig = this.getComponent(MegaReelConfig);
		super.onloadExtend();
	}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
