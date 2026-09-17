---
id: "cc_slot_module:SlotTableSoundEffectModule:inheritance:subclassing_guide"
title: "SlotTableSoundEffectModule Subclassing Guide"
category: "cc_slot_module"
tags: ["SlotTableSoundEffectModule", "slot_table_sound_effect_module", "cc_slot_module", "inheritance", "subclassing"]
---

# 🏗️ SlotTableSoundEffectModule Subclassing Guide

<!-- convention-summary-start -->
### SlotTableSoundEffectModule Subclassing Guide Summary

- **Core Architecture / Purpose**: Technical reference, API contract, and integration guide for SlotTableSoundEffectModule Subclassing Guide.
- **Key Mechanisms & Design**: Encapsulates core algorithms, event hooks, and performance optimizations within the slot framework runtime.
- **Domain Capabilities**: cc_slot_module, 09_inheritance_and_customization
- **Scope & Code Paths**: `assets/cc-common/cc-slot-module/`
- **Related Docs**: [Master Index](../INDEX.md)
<!-- convention-summary-end -->


---

## 1. Subclassing Declaration

```typescript
const { ccclass } = cc._decorator;
import { SlotTableSoundEffectModule } from "SlotTableSoundEffectModule";

@ccclass
export default class SlotTableSoundEffectModule9666 extends SlotTableSoundEffectModule {
    // Custom audio behavior
}
```

---

## 2. Invariant Rules

1. **Retain Base Event Handlers**: Always invoke `super.onLoadExtend()` to keep `REEL_START_SOUND` and `REEL_STOP_SOUND` active.
2. **Audio Volume Normalization**: Rely on `SlotSoundPlayerModule` for master volume levels rather than hardcoding sound properties.
