---
id: "cc_slot_module:SlotTableNearWinModule:method:onLoadExtend"
title: "SlotTableNearWinModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 🚀 `SlotTableNearWinModule.onLoadExtend(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule.onLoadExtend Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public onLoadExtend(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Invoked by `SlotBaseModule.onLoad()` during scene initialization. Resolves `TableModuleConfig`, resets coordinate data, and caches the animation component.

---

## 3. Algorithmic Steps

1. Fetches `TableModuleConfig` from current node.
2. Calls `initNearWinValue()` to calculate `_startX`.
3. Calls `_getAnimNearWin()` to cache `_nearWinAnim`.
4. Calls `extendInit()` hook for subclass customization.

---

## 4. Full Source Code

```typescript
onLoadExtend(): void {
    this.config = this.getComponent(TableModuleConfig);
    this.initNearWinValue();
    this._getAnimNearWin();
    this.extendInit();
}
```
