---
id: "cc_slot_mechanics:TransformSymbolData:methods:split"
title: "TransformSymbolData.split Method Implementation"
category: "cc_slot_mechanics"
tags: ["TransformSymbolData", "transform_symbol_data", "cc_slot_mechanics", "methods", "split"]
---

# 📖 `TransformSymbolData.split()`

<!-- convention-summary-start -->
### TransformSymbolData.split Method Implementation Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for TransformSymbolData.split Method Implementation.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_mechanics, 05_methods
- **Scope & Code Paths**: `assets/cc-common/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
split(","); const transformData: TransformData[] = []; for (let i = 0; i < arr.length; i++) { const subArr = arr[i].split(":"); transformData.push({ symbolCode: subArr[0], symbolIndex: Number(subArr[1]) }); } return transformData; } protected getTransformDataFromMatrix(): TransformData[]
```

- **Scope**: `TransformSymbolData`
- **Execution Mode**: Synchronous fast execution or asynchronous Promise workflow.

---

## 2. Complete Source Implementation

```typescript
split(",");
		const transformData: TransformData[] = [];
		for (let i = 0; i < arr.length; i++) {
			const subArr = arr[i].split(":");
			transformData.push({ symbolCode: subArr[0], symbolIndex: Number(subArr[1]) });
		}
		return transformData;
	}

	protected getTransformDataFromMatrix(): TransformData[] {
		const transformData: TransformData[] = [];
		const matrix0: string[] = this.getMatrix0();
		const matrix: string[] = this.getMatrix();

		if (!matrix0.length || !matrix.length || eno.ArrayUtils.matrixEqual(matrix0, matrix)) {
			return [];
		}
```

---

## 3. Algorithmic Walkthrough & Call Graph

1. **Parameter Validation**: Checks validity of passed inputs.
2. **State & Math Mutation**: Applies required data transformations.
3. **Event Notification**: Emits synchronization events to HUD / listeners.
