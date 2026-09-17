---
id: "cc_slot_module:GameEventManager:gotcha:missing_target_off_leak"
title: "Gotcha: Memory Leak & Zombie Callbacks via Missing targetOff()"
category: "cc_slot_module"
tags: ["GameEventManager", "game_event_manager", "cc_slot_module", "gotchas", "targetOff", "memory_leak", "zombie_callbacks"]
---

# 🛑 Gotcha: Memory Leak & Zombie Callbacks via Missing `targetOff()`

<!-- convention-summary-start -->
### Gotcha: Memory Leak & Zombie Callbacks via Missing targetOff() Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for Gotcha: Memory Leak & Zombie Callbacks via Missing targetOff().
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 07_gotchas
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


## 1. Symptom & Visual Defect
After closing and reopening modal dialogs (such as `InfoPanel` or `BetHistory`), clicking a spin triggers duplicate event executions and memory steadily climbs.

---

## 2. Root Cause & Cocos 2.4 Engine Quirk
`GameEventManager` is a singleton living across the scene lifetime. When a dynamically created component attaches a listener using `this.eventManager.on("EVENT", this.callback, this)`, `GameEventManager` holds a strong reference to `this` (the component context). When the node is destroyed, garbage collection cannot free the node hierarchy unless `targetOff(this)` is invoked.

---

## 3. Standard Code Solution & Fix

```typescript
onDestroy(): void {
    if (this.eventManager) {
        this.eventManager.targetOff(this);
    }
}
```
