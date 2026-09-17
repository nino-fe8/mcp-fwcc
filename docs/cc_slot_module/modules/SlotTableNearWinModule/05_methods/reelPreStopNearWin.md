---
id: "cc_slot_module:SlotTableNearWinModule:method:reelPreStopNearWin"
title: "SlotTableNearWinModule.reelPreStopNearWin Method"
category: "cc_slot_module"
tags: ["SlotTableNearWinModule", "slot_table_near_win_module", "cc_slot_module", "methods", "reelPreStopNearWin"]
---

# 🚀 `SlotTableNearWinModule.reelPreStopNearWin(): void`

<!-- convention-summary-start -->
### SlotTableNearWinModule.reelPreStopNearWin Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableNearWinModule.reelPreStopNearWin Method.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature

```typescript
public reelPreStopNearWin(): void
```

---

## 2. Trigger Source & Execution Lifecycle

Triggered via `this.node.emit("PRE_REEL_STOP_NEARWIN")` by `SlotTableModule` immediately before reel easing deceleration starts.

---

## 3. Full Source Code

```typescript
reelPreStopNearWin(): void {
    // before reel easing stop
}
```
