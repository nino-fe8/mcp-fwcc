---
id: "cc_slot_module:SlotTableSoundEffectModule:method:onLoadExtend"
title: "SlotTableSoundEffectModule.onLoadExtend Method"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "methods", "onLoadExtend"]
---

# 🚀 `SlotTableSoundEffectModule.onLoadExtend(): void`

<!-- convention-summary-start -->
### SlotTableSoundEffectModule.onLoadExtend Method Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule.onLoadExtend Method.
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

Invoked by `SlotBaseModule.onLoad()` during table instantiation. Binds audio trigger listeners to `this.node` and caches `TableModuleConfig`.

---

## 3. Algorithmic Steps

1. Subscribes `this.node.on('REEL_START_SOUND', this.onReelStartSound, this)`.
2. Subscribes `this.node.on('REEL_STOP_SOUND', this.onReelStopSound, this)`.
3. Queries and stores `this.tableConfig = this.getComponent(TableModuleConfig)`.

---

## 4. Full Source Code

```typescript
onLoadExtend(): void {
    this.node.on('REEL_START_SOUND', this.onReelStartSound, this);
    this.node.on('REEL_STOP_SOUND', this.onReelStopSound, this);
    this.tableConfig = this.getComponent(TableModuleConfig);
}
```
