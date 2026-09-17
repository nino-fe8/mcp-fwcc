---
id: "cc_slot_module:GameModeDirectorModule:method:showScatterPayLine"
title: "GameModeDirectorModule._showScatterPayLine() Method Specification"
category: "cc_slot_module"
tags: ["GameModeDirectorModule", "game_mode_director", "cc_slot_module", "method", "_showScatterPayLine"]
---

# `GameModeDirectorModule._showScatterPayLine(): Promise<void>`

<!-- convention-summary-start -->
### GameModeDirectorModule._showScatterPayLine() Method Specification Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for GameModeDirectorModule._showScatterPayLine() Method Specification.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 05_methods
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Method Signature
```typescript
_showScatterPayLine(): Promise<void>
```

---

## 2. Detailed Algorithmic Execution Logic
Emits scoped module event `this.moduleEvent.emit("SHOW_SCATTER_PAYLINE")` to highlight triggering Scatter symbols.

---

## 3. Un-truncated Source Code Implementation
```typescript
_showScatterPayLine(): Promise<void> {
    return this.moduleEvent.emit("SHOW_SCATTER_PAYLINE");
}
```
